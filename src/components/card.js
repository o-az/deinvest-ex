import { Card, Typography } from "antd";
import * as React from "react";
import { currency, parseBigNumberToString } from "../utils/format-numbers";

const { Meta } = Card;

export function AppCard({ item }) {
  const {
    contract_name,
    contract_ticker_symbol,
    contract_decimals,
    quote_rate,
    balance,
  } = item;
  const parsedBalance = Number(
    parseBigNumberToString(contract_decimals, balance)
  ).toFixed(2);
  const parsedQuoteRate = currency(Number(quote_rate));
  return (
    <Card style={{ width: 300 }} hoverable>
      <Typography.Title level={2}>{contract_name}</Typography.Title>
      <Meta
        title={`${contract_ticker_symbol}: ${parsedBalance} 💰`}
        description={`Current ${contract_ticker_symbol} price ${parsedQuoteRate}`}
      />
    </Card>
  );
}
