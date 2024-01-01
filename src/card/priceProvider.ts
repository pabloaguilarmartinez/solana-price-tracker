const API_URL: string = 'https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd&precision=2';

type CoinGeckoResponse = {
  solana: {
    usd: number
  }
};

export const getPrice = async (): Promise<number> => {
  try {
    const response = await fetch(API_URL)
    const json: CoinGeckoResponse = await response.json();
    return json.solana.usd;
  } catch (_) {
    throw new Error('Error fetching Solana price');
  }
};
