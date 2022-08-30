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
import ShellView from "./features/asset-view/ShellView";
import Header from "./features/header/Header";
import Landing from "./features/landing/Landing";
import MenuDrawer from "./features/menu-drawer/MenuDrawer";

export type RootStackParamList = {
  Landing: {
    isConnected: boolean;
    isLoading: boolean;
    onConnectPress: () => void;
    accountAddress: boolean;
  };
  AssetList: { witches: CovenAsset[]; shell: CovenAsset };
  AssetView: { asset: CovenAsset };
  ShellView: { asset: CovenAsset };
  Menu: Record<string, unknown>;
};

export type AssetViewNavProps = NativeStackScreenProps<
  RootStackParamList,
  "AssetView"
>;

export type LandingNavProps = NativeStackScreenProps<
  RootStackParamList,
  "Landing"
>;

/*export type AssetViewRouteProps = RouteProp<RootStackParamList, "AssetView">;
export type AssetListRouteProps = RouteProp<RootStackParamList, "AssetList">;
export type ShellViewRouteProps = RouteProp<RootStackParamList, "ShellView">;
export type LandingRouteProps = RouteProp<RootStackParamList, "Landing">;*/

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
  const [shells, setShells] = useState(null);
  const connectWallet = useCallback(() => {
    return connector.connect();
  }, [connector]);

  const killSession = React.useCallback(() => {
    console.debug("Killing session");
    return connector.killSession();
  }, [connector]);

  useEffect(() => {
    if (connector && connector.accounts && connector.accounts.length > 0) {
      getAccountInfo(connector.accounts[0]);
    } else {
      console.debug(
        "Not fetching account info because connector is null or does not have account info, connector"
      );
    }
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
      const shellAssets = json.assets.filter(
        (a: CovenAsset) => a.collection.slug === "sirens-shell"
      );
      setWitches(witchAssets);
      setShells(shellAssets.length > 0 ? shellAssets[0] : null);
    } catch (error) {
      console.error("CryptoCoven error: ", error);
    } finally {
      setLoading(false);
    }
  };

  const onConnectPress = () => {
    if (connector && connector.connected) {
      killSession().catch(console.error);
    } else {
      setLoading(true);
      connectWallet().catch(console.error);
    }
  };

  const getNavHeader = (navigation, route, options, dark?) => {
    return (
      <Header
        isLoading={isLoading}
        isConnected={connector && connector.connected}
        walletAddress={
          connector && connector.accounts ? connector.accounts[0] : ""
        }
        onConnectPress={onConnectPress}
        navigation={navigation}
        dark={dark || false}
      />
    );
  };

  function AssetStack() {
    return (
      <Stack.Navigator initialRouteName="AssetList">
        <Stack.Screen
          name="AssetList"
          component={AssetList}
          options={{
            header: ({ navigation, route, options }) =>
              getNavHeader(navigation, route, options, true),
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
          name="ShellView"
          component={ShellView}
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
    );
  }
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer ref={navigationRef}>
        <Drawer.Navigator
          screenOptions={{
            drawerPosition: "right",
            drawerStyle: {
              backgroundColor: "white",
              zIndex: 1000,
            },
          }}
          drawerContent={(props) => (
            <MenuDrawer {...props} witches={witches} shells={shells} />
          )}
          initialRouteName="Landing"
        >
          <Drawer.Screen
            name={"Landing"}
            component={Landing}
            options={({ route }: any) => ({
              header: ({ navigation, route, options }) =>
                getNavHeader(navigation, route, options),
              headerShadowVisible: false,
              headerStyle: {
                backgroundColor: "#EEEEEE",
                elevation: 0,
                shadowOpacity: 0,
              },
            })}
          />
          <Drawer.Screen
            name="AssetStack"
            component={AssetStack}
            options={{ headerShown: false }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}
