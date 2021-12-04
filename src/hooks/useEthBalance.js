import * as React from "react";
import { formatEther } from "@ethersproject/units";

export function useEthBalance({ account, library, chainId }) {
  const [balance, setBalance] = React.useState();
  React.useEffect(() => {
    if (!!account && !!library) {
      let stale = false;
      library
        .getBalance(account)
        .then((balance) => !stale && setBalance(balance))
        .catch(() => !stale && setBalance(null));

      return () => {
        stale = true;
        setBalance(undefined);
      };
    }
  }, [account, library, chainId]);

  return balance === null
    ? "Error"
    : balance
    ? `Ξ${formatEther(balance).slice(0, 4)}`
    : "";
}
