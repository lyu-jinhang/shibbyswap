import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  // {
  //   label: 'Trade (New with APE)',
  //   icon: 'TradeIcon',
  //   items: [
  //     {
  //       label: 'Exchange',
  //       href:
  //         'https://swape.shibbyswap.com/#/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0xC6B4b6b9FcD7De6cAE4eB89Bc6Ae9426E2183F08',
  //       target: '_blank',
  //     },
  //     {
  //       label: 'Liquidity',
  //       href:
  //         'https://swape.shibbyswap.com/#/add/0xe9e7cea3dedca5984780bafc599bd69add087d56/0xC6B4b6b9FcD7De6cAE4eB89Bc6Ae9426E2183F08',
  //       target: '_blank',
  //     },
  //   ],
  // },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href:
          'https://swap.shibbyswap.com/#/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0xC6B4b6b9FcD7De6cAE4eB89Bc6Ae9426E2183F08',
      },
      {
        label: 'Liquidity',
        href:
          'https://swap.shibbyswap.com/#/add/0xe9e7cea3dedca5984780bafc599bd69add087d56/0xC6B4b6b9FcD7De6cAE4eB89Bc6Ae9426E2183F08',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  // {
  //   label: 'Launchpad',
  //   icon: 'BushIcon',
  //   href: '/bush',
  // },
  // {
  //   label: 'Techrate Audit',
  //   icon: 'ShieldIcon',
  //   href: 'https://shibbyswap.com/files/audit_techrate.pdf',
  //   target: '_blank',
  // },
  // {
  //   label: 'Certik Audit (In-Progress)',
  //   icon: 'ShieldIcon',
  //   href: 'https://certik.org/projects/shibbyswaptoken',
  //   target: '_blank',
  // },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: '/lottery',
  },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  // {
  //   label: 'Chart',
  //   icon: 'InfoIcon',
  //   href: 'https://dex.guru/token/0xC6B4b6b9FcD7De6cAE4eB89Bc6Ae9426E2183F08-bsc',
  //   target: '_blank',
  // },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: '/ifo',
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Voting',
      //   href: 'https://voting.pancakeswap.finance',
      // },
      {
        label: 'Github',
        href: 'https://github.com/Shibbyswap',
        target: '_blank',
      },
      // {
      //   label: 'Docs',
      //   href: 'https://doc.shibbyswap.com/',
      //   target: '_blank',
      // },
      // {
      //   label: 'Blog',
      //   href: 'https://shibbyswaptokendex.medium.com/',
      //   target: '_blank',
      // },
      // {
      //   label: 'Announcements',
      //   href: 'https://t.me/shibbyswaptoken',
      //   target: '_blank',
      // },
      {
        label: 'Discord',
        href: 'https://discord.gg/Vu62PSvm',
        target: '_blank',
      },
      {
        label: 'Telegram',
        href: 'https://t.me/shibby_finance',
        target: '_blank',
      },
    ],
  },
]

export default config
