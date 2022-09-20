import { useWalletConnect } from "@walletconnect/react-native-dapp";
import React, { useCallback, useEffect, useState } from "react";

import { CovenAsset } from "../../model/types";

type WitchHookProps = {
  navigation: any;
};
export default function useWitches({ navigation }: WitchHookProps) {
  const connector = useWalletConnect();
  const [loading, setLoading] = useState(false);
  const [connected, setConnected] = useState(false);
  const [account, setAccount] = useState(null);
  const [witches, setWitches] = useState(null);
  const [shells, setShells] = useState(null);

  useEffect(() => {
    setConnected(connector && connector.connected);
  }, [connector]);
  useEffect(() => {
    if (connected && connector.accounts && connector.accounts.length > 0) {
      setAccount(connector.accounts[0]);
    }
  }, [connected]);
  useEffect(() => {
    if (account && connected) {
      getAccountInfo(account).then(({ shell, witches }) => {
        setWitches(witches);
        setShells(shell.length > 0 ? shell[0] : null);
        setLoading(false);
        navigation.navigate("AssetStack", {
          params: {
            shell: shell.length > 0 ? shell[0] : null,
            witches: witches,
          },
          screen: "AssetList",
        });
      });
    }
  }, [account]);
  const connectWallet = useCallback(() => {
    if (connected) {
      killSession().catch(console.error);
      setConnected(false);
      setLoading(false);
      setAccount(null);
      setWitches(null);
      setShells(null);
      navigation.navigate("Landing");
    } else {
      setLoading(true);
      connector.connect();
    }
  }, [connector, connected, navigation]);
  const killSession = React.useCallback(() => {
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
      const witchAssets = json.assets.filter(
        (a: CovenAsset) => a.collection.slug === "cryptocoven"
      );
      const shellAssets = json.assets.filter(
        (a: CovenAsset) => a.collection.slug === "sirens-shell"
      );
      return { shell: shellAssets, witches: witchAssets };
    } catch (error) {
      console.error("CryptoCoven error: ", error);
    }
  };

  return {
    account,
    connectWallet,
    connected,
    killSession,
    loading,
    shells,
    witches,
  };
}
