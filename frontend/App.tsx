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
  useNavigationContainerRef,
} from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { StatusBar, StatusBarStyle } from "expo-status-bar";
import React, { useEffect, useState } from "react";

import { CovenAsset, WitchArchetype } from "../model/types";

import AppLoading from "./features/app-loading/AppLoading";
import AssetList from "./features/asset-list/AssetList";
import AssetView from "./features/asset-view/AssetView";
import ShellView from "./features/asset-view/ShellView";
import Header from "./features/header/Header";
import Landing from "./features/landing/Landing";
import ArchetypeView from "./features/lore/ArchetypeView";
import LoreScreen from "./features/lore/LoreScreen";
import MenuDrawer from "./features/menu-drawer/MenuDrawer";
import useWitches from "./services/useWitches";

export type RootStackParamList = {
  Landing: {
    isConnected: boolean;
    isLoading: boolean;
    onConnectPress: () => void;
    accountAddress: boolean;
  };
  AssetList: { witches: CovenAsset[]; shell: CovenAsset };
  AssetStack: {
    params: { witches: CovenAsset[]; shell: CovenAsset };
    screen: string;
  };
  AssetView: { asset: CovenAsset };
  ArchetypeView: { archetype: WitchArchetype };
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
  const navigationRef = useNavigationContainerRef<LandingNavProps>();
  const {
    account,
    connectWallet,
    connected,
    loading,
    shells,
    witches,
  } = useWitches({ navigation: navigationRef });
  const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>("dark");

  useEffect(() => {
    return navigationRef.addListener("state", (e) => {
      const name = navigationRef.getCurrentRoute().name;
      switch (name) {
        case "Landing":
          setStatusBarStyle("dark");
          break;
        default:
          setStatusBarStyle("light");
          break;
      }
    });
  }, []);

  const getNavHeader = (navigation, route, options, dark?) => {
    return (
      <Header
        isLoading={loading}
        isConnected={connected}
        walletAddress={account || ""}
        onConnectPress={connectWallet}
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
              backgroundColor: "rgb(30, 33, 37)",
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
              backgroundColor: "rgb(30, 33, 37)",
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

  function LoreStack() {
    return (
      <Stack.Navigator initialRouteName="LoreScreen">
        <Stack.Screen
          name="LoreScreen"
          component={LoreScreen}
          options={{
            header: ({ navigation, route, options }) =>
              getNavHeader(navigation, route, options, true),
          }}
        />
        <Stack.Screen
          name="ArchetypeView"
          component={ArchetypeView}
          options={({ route }) => ({
            headerStyle: {
              backgroundColor: "#1e2125",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontFamily: "Eskapade",
              fontSize: 32,
              textTransform: "capitalize",
            },
            title: (route.params as any).archetype,
          })}
        />
      </Stack.Navigator>
    );
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
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
              <MenuDrawer
                {...props}
                witches={witches}
                shell={shells}
                isLoading={loading}
                isConnected={connected}
                onConnectPress={connectWallet}
              />
            )}
            initialRouteName="Landing"
          >
            <Drawer.Screen
              name={"Landing"}
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
              children={(props) => <Landing />}
            />
            <Drawer.Screen
              name={"LoreStack"}
              component={LoreStack}
              options={{ headerShown: false }}
            />
            <Drawer.Screen
              name="AssetStack"
              component={AssetStack}
              options={{ headerShown: false }}
            />
          </Drawer.Navigator>
        </NavigationContainer>
        <StatusBar
          backgroundColor="transparent"
          style={statusBarStyle}
          translucent={true}
        />
      </>
    );
  }
}
