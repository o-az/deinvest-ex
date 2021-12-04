import { useWeb3React } from "@web3-react/core";
import { Card, Col, Row, Skeleton } from "antd";
import * as React from "react";
import { addressTokenBalances } from "../API/covalent-wrapper";
import { useEthBalance } from "../hooks/useEthBalance";
import { ConnectWallet, SearchBar } from "./";
import { AppCard } from "./card";
import { StatusIcon } from "./status-icon";
const { Meta } = Card;

export function AppLayout() {
  const { active, error, library, account, chainId } = useWeb3React();
  const [inputAddress, setInputAddress] = React.useState("");
  const [balances, setBalances] = React.useState();
  const [loading, setLoading] = React.useState(false);

  const { balance } = useEthBalance({ account, library, chainId });

  const onInputChange = async (event) => setInputAddress(event.target.value);
  const onSearchClick = async () => {
    setLoading(true);
    addressTokenBalances(inputAddress).then(console.log);
    const response = await addressTokenBalances(inputAddress);
    const OHM = response.data.items.filter(
      (item) =>
        item.contract_name === "Olympus" || item.contract_name === "Ether"
    );

    if (response) {
      setLoading(false);
      setBalances(OHM);
    }
  };
  return (
    <>
    <br/>
      {active ? (
        <>
          <Row justify="center" gutter={[24, 48]}>
            <Col span={16}>
              <SearchBar
                onInputChange={onInputChange}
                onSearchClick={onSearchClick}
                loading={loading}
              />
            </Col>
            <Col span={5}>
              <ConnectWallet />
            </Col>
            <Col span={3}>
              <StatusIcon active={active} error={error} />
            </Col>
          </Row>
          <br />
          <br />

          <Row justify="space-between" align="middle" gutter={[24, 48]}>

            {balances ? (
              balances.map((item, index) => {
                return (
                  <Col span={12} justify="center" key={index}>
                    <AppCard item={item} /> {balance}
                  </Col>
                );
              })
            ) : (
              <Skeleton loading={loading} avatar active>
                <Meta />
              </Skeleton>
            )}
          </Row>
        </>
      ) : (
        <Row justify="center" gutter={[48, 48]}>
          <Col span={10}>
            <ConnectWallet />
          </Col>
          <Col span={3}>
            <StatusIcon active={active} error={error} />
          </Col>
        </Row>
      )}
    </>
  );
}
