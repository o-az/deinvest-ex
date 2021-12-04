import { useWeb3React } from "@web3-react/core";
import { Button } from "antd";
import * as React from "react";
import { injectedConnector } from "../wallet/connector";
import { useEagerConnect, useInactiveListener } from "../wallet/hooks";

export const ConnectWallet = () => {
  const { connector, activate, deactivate, active } = useWeb3React();
  const [activatingConnector, setActivatingConnector] = React.useState();

  React.useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  const triedEager = useEagerConnect();
  useInactiveListener(!triedEager || !!activatingConnector);

  const onConnectClick = async () => {
    setActivatingConnector(injectedConnector);
    activate(injectedConnector);
  };

  const onDisconnectClick = async () => {
    deactivate();
  };

  return (
    <>
      {active ? (
        <Button onClick={onDisconnectClick} block size="large">
          Disconnect
        </Button>
      ) : (
        <Button onClick={onConnectClick} block size="large">
          Connect
        </Button>
      )}
    </>
  );
};
