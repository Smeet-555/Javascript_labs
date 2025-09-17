// CoinGecko API URLs
export const API_URLS = {
  COINS: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d',
  GLOBAL: 'https://api.coingecko.com/api/v3/global',
  TRENDING: 'https://api.coingecko.com/api/v3/search/trending',
  NFT_COINS: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=non-fungible-tokens-nft&order=market_cap_desc&per_page=10&page=1',
  CATEGORIES: 'https://api.coingecko.com/api/v3/coins/categories',
  EXCHANGES: 'https://api.coingecko.com/api/v3/exchanges',
  COIN_CHART: (coinId, days = 7) => `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${days}`,
};