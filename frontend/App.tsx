import {
  Inconsolata_200ExtraLight,
  Inconsolata_300Light,
  Inconsolata_400Regular,
  Inconsolata_500Medium,
  Inconsolata_600SemiBold,
  Inconsolata_700Bold,
  Inconsolata_800ExtraBold,
  Inconsolata_900Black,
  useFonts,
} from "@expo-google-fonts/inconsolata";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  NavigationContainer,
  RouteProp,
  useNavigationContainerRef,
} from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { useWalletConnect } from "@walletconnect/react-native-dapp";
import React, { useCallback, useEffect, useState } from "react";

import { CovenAsset } from "../model/types";

import AppLoading from "./features/app-loading/AppLoading";
import AssetList from "./features/asset-list/AssetList";
import AssetView from "./features/asset-view/AssetView";
import ClamView from "./features/asset-view/ClamView";
import Header from "./features/header/Header";
import Landing from "./features/landing/Landing";

export type RootStackParamList = {
  Landing: {
    isConnected: boolean;
    isLoading: boolean;
    onConnectPress: () => void;
    accountAddress: boolean;
  };
  AssetsList: { witches: CovenAsset[]; clam: CovenAsset };
  AssetView: { asset: CovenAsset };
  ClamView: { asset: CovenAsset };
};

export type AssetViewNavProps = NativeStackScreenProps<
  RootStackParamList,
  "AssetView"
>;

export type LandingNavProps = NativeStackScreenProps<
  RootStackParamList,
  "Landing"
>;

export type AssetViewRouteProps = RouteProp<RootStackParamList, "AssetView">;
export type AssetsListRouteProps = RouteProp<RootStackParamList, "AssetsList">;
export type ClamViewRouteProps = RouteProp<RootStackParamList, "ClamView">;
export type LandingRouteProps = RouteProp<RootStackParamList, "Landing">;

export default function App(): JSX.Element {
  const [fontsLoaded] = useFonts({
    Eskapade: require("../assets/fonts/Eskapade-Fraktur.ttf"),
    Inconsolata_200ExtraLight,
    Inconsolata_300Light,
    Inconsolata_400Regular,
    Inconsolata_500Medium,
    Inconsolata_600SemiBold,
    Inconsolata_700Bold,
    Inconsolata_800ExtraBold,
    Inconsolata_900Black,
  });
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  const navigationRef = useNavigationContainerRef();
  const connector = useWalletConnect();
  const [isLoading, setLoading] = useState(false);
  const [witches, setWitches] = useState([]);
  const [clams, setClams] = useState(null);
  const connectWallet = useCallback(() => {
    return connector.connect();
  }, [connector]);

  const killSession = React.useCallback(() => {
    console.debug("Killing session");
    return connector.killSession();
  }, [connector]);
  const getAccountInfo = async (accountId: string) => {
    try {
      const response = await fetch(
        "https://cryptocovennative-backend.uc.r.appspot.com/assets?" +
          new URLSearchParams({
            address: accountId,
          }),
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "GET",
        }
      );
      const json = await response.json();
      // console.debug("Landing, assets: ", json);
      const witchAssets = json.assets.filter(
        (a: CovenAsset) => a.collection.slug === "cryptocoven"
      );
      const clamAssets = json.assets.filter(
        (a: CovenAsset) => a.collection.slug === "sirens-shell"
      );
      setWitches(witchAssets);
      setClams(clamAssets.length > 0 ? clamAssets[0] : null);
      // @ts-ignore
      navigationRef.navigate("AssetsList", {
        clam: clamAssets.length > 0 ? clamAssets[0] : [],
        witches: witchAssets,
      });
    } catch (error) {
      console.error("CryptoCoven error: ", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (connector && connector.accounts && connector.accounts.length > 0) {
      getAccountInfo(connector.accounts[0]);
    } else {
      console.debug(
        "Not fetching account info because connector is null or does not have account info"
      );
    }
  }, [connector]);
  const onConnectPress = () => {
    if (connector && connector.connected) {
      killSession().catch(console.error);
    } else {
      setLoading(true);
      connectWallet().catch(console.error);
    }
  };
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer ref={navigationRef}>
        {/*<Drawer.Navigator initialRouteName="Landing">
              <Drawer.Screen
                  name={"Landing"}
                  component={Landing}
                             options={({ route }: any) => ({
                                 headerShadowVisible: false,
                                 headerStyle: {
                                     backgroundColor: "#EEEEEE",
                                     elevation: 0,
                                     shadowOpacity: 0,
                                 },
                                 headerTitle: () => (
                                     <Header
                                         isLoading={isLoading}
                                         isConnected={connector.connected}
                                         walletAddress={
                                             connector && connector.accounts ? connector.accounts[0] : ""
                                         }
                                         onConnectPress={onConnectPress}
                                     />
                                 ),
                             })} />
              <Drawer.Screen name="Notifications" component={NotificationsScreen} />
          </Drawer.Navigator>*/}
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen
            name="CryptoCoven"
            component={Landing}
            options={({ route }: any) => ({
              headerShadowVisible: false,
              headerStyle: {
                backgroundColor: "#EEEEEE",
                elevation: 0,
                shadowOpacity: 0,
              },
              headerTitle: () => (
                <Header
                  isLoading={isLoading}
                  isConnected={connector.connected}
                  walletAddress={
                    connector && connector.accounts ? connector.accounts[0] : ""
                  }
                  onConnectPress={onConnectPress}
                />
              ),
            })}
          />
          <Stack.Screen
            name="AssetsList"
            component={AssetList}
            options={{
              headerStyle: {
                backgroundColor: "rgb(30, 33, 37)",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontFamily: "Eskapade",
                fontSize: 32,
              },
              title: "Your Witches",
            }}
          />
          <Stack.Screen
            name="AssetView"
            component={AssetView}
            options={({ route }) => ({
              headerStyle: {
                backgroundColor: "#2A2D31",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontFamily: "Eskapade",
                fontSize: 32,
              },
              title: "Witch #" + (route.params as any).asset.token_id,
            })}
          />
          <Stack.Screen
            name="ClamView"
            component={ClamView}
            options={({ route }) => ({
              headerStyle: {
                backgroundColor: "#2A2D31",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontFamily: "Eskapade",
                fontSize: 32,
              },
              title: "Siren's Shell",
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
