import CONFIG from "./config.js";

const aaSearch = [
  {
    symbol: "AAL",
    name: "American Airlines Group Inc.",
    currency: "USD",
    stockExchange: "NASDAQ Global Select",
    exchangeShortName: "NASDAQ",
  },
  {
    symbol: "AAXJ",
    name: "iShares MSCI All Country Asia ex Japan ETF",
    currency: "USD",
    stockExchange: "NASDAQ Global Market",
    exchangeShortName: "NASDAQ",
  },
  {
    symbol: "AAWW",
    name: "Atlas Air Worldwide Holdings, Inc.",
    currency: "USD",
    stockExchange: "NASDAQ Global Select",
    exchangeShortName: "NASDAQ",
  },
  {
    symbol: "AAVM",
    name: "Alpha Architect Global Factor Equity ETF",
    currency: "USD",
    stockExchange: "NASDAQ Global Market",
    exchangeShortName: "NASDAQ",
  },
  {
    symbol: "AARD",
    name: "Aardvark Therapeutics, Inc. Common Stock",
    currency: "USD",
    stockExchange: "NASDAQ Global Select",
    exchangeShortName: "NASDAQ",
  },
  {
    symbol: "AAPU",
    name: "Direxion Daily AAPL Bull 1.5X Shares",
    currency: "USD",
    stockExchange: "NASDAQ Global Market",
    exchangeShortName: "NASDAQ",
  },
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    currency: "USD",
    stockExchange: "NASDAQ Global Select",
    exchangeShortName: "NASDAQ",
  },
  {
    symbol: "AAPG",
    name: "Ascentage Pharma Group International",
    currency: "USD",
    stockExchange: "NASDAQ Global Market",
    exchangeShortName: "NASDAQ",
  },
  {
    symbol: "AAPD",
    name: "Direxion Daily AAPL Bear 1X Shares",
    currency: "USD",
    stockExchange: "NASDAQ Global Market",
    exchangeShortName: "NASDAQ",
  },
  {
    symbol: "AAPB",
    name: "GraniteShares ETF Trust - GraniteShares 2x Long Tilray Daily ETF",
    currency: "USD",
    stockExchange: "NASDAQ Global Market",
    exchangeShortName: "NASDAQ",
  },
];

function checkResponse(response, apiName) {
  if (!response.ok) {
    throw new Error(`${apiName} not found`);
  }
}

async function fetchData(url, nameApi) {
  const response = await fetch(url);
  checkResponse(response, nameApi);
  const data = await response.json();
  return data;
}

function generateSearch(json) {
  const search = json.map(obj => {
    return { symbol: obj.symbol, name: obj.name };
  });
  console.log(search);
  return search
}

export /*async*/ function invokeSearchAPIs(stock) {
//    const url =`https://financialmodelingprep.com/api/v3/search?query=${stock}&limit=10&exchange=NASDAQ&apikey=${CONFIG.API_KEY}`
//    const stocksData = await fetchData(url,"search stock api")
//    return generateSearch(stocksData)
  return generateSearch(aaSearch);
}

