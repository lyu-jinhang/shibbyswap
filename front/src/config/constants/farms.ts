import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    isOldPsc: true,
    isTokenOnly: true,
    lpSymbol: 'SATO',
    lpAddresses: {
      97: '',
      56: '0x76E1A18c93db1DF8B3203ddEF448037B0f8d3357', // SATO-BUSD LP
    },
    tokenSymbol: 'SATO',
    tokenAddresses: {
      97: '',
      56: '0x8B998619efb0CF7B3fDc85FF2b8bdDCd694d19c2',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    isOldPsc: true,
    lpSymbol: 'SATO-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x76E1A18c93db1DF8B3203ddEF448037B0f8d3357',
    },
    tokenSymbol: 'SATO',
    tokenAddresses: {
      97: '',
      56: '0x8B998619efb0CF7B3fDc85FF2b8bdDCd694d19c2',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 2,
    isOldPsc: true,
    lpSymbol: 'SATO-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xDC656444FC1701ffF3Fc39Ec8D6379886FecFE6E',
    },
    tokenSymbol: 'SATO',
    tokenAddresses: {
      97: '',
      56: '0x8B998619efb0CF7B3fDc85FF2b8bdDCd694d19c2',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 3,
    isPsc: true,
    isTokenOnly: true,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // BNB-BUSD
    },
    tokenSymbol: 'WBNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  // {
  //   pid: 4,
  //   isPsc: true,
  //   isTokenOnly: true,
  //   lpSymbol: 'BTCB',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xb8875e207ee8096a929d543c9981c9586992eacb', // BTCB-BUSD LP
  //   },
  //   tokenSymbol: 'BTCB',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  {
    pid: 4,
    isPsc: true,
    isTokenOnly: true,
    lpSymbol: 'ETH',
    lpAddresses: {
      97: '',
      56: '0xd9a0d1f5e02de2403f68bb71a15f8847a854b494', // ETH-BUSD LP
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 5,
    isPsc: true,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  // {
  //   pid: 7,
  //   isPsc: true,
  //   isTokenOnly: true,
  //   lpSymbol: 'ADA',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xba51d1ab95756ca4eab8737ecd450cd8f05384cf', // ADA-BNB
  //   },
  //   tokenSymbol: 'ADA',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47', // ADA
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },

  // { // ----------------------------------------------------------------------- checked
  //   pid: 9,
  //   isPsc: true,
  //   lpSymbol: 'BSC-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x37e195ad182b653ddde0b7742fa137cc2f52f8b1', // checked
  //   },
  //   tokenSymbol: 'BSC',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xf5128928f85f16bd67c1e02ddd1b47a71d17adf5', // checked
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
]

export default farms
