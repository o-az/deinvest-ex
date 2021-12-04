const COVALENT_ENDPOINT = "https://api.covalenthq.com/v1";
const COVALENT_API_KEY = process.env.REACT_APP_COVALENT_API_KEY;
// Ethereum's chain ID
const CHAIN_ID = 1;

const CovalentRequest = async (relativePath) => {
  const url = `${COVALENT_ENDPOINT}/${CHAIN_ID}/${relativePath}`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${COVALENT_API_KEY}`,
    },
    redirect: "follow",
  };
  try {
    const response = await fetch(url, options);
    return response.json();
  } catch (error) {
    throw new Error(error);
  }
};

export const addressTokenBalances = async (address) => {
  const relativePath = `address/${address}/balances_v2/`;
  return CovalentRequest(relativePath);
};
