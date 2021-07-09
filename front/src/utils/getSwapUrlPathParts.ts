// https://swape.shibbyswap.com/#/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0x8B998619efb0CF7B3fDc85FF2b8bdDCd694d19c2
const getSwapUrlPathParts = ({ tokenAddresses }) => {
  const chainId = process.env.REACT_APP_CHAIN_ID
  return `#/swap?outputCurrency=${tokenAddresses[chainId]}`
}

export default getSwapUrlPathParts
