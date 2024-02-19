import { ChainId } from '../chain'
import { Token } from '../currency'
import {
  AAVE,
  BUSD,
  DAI,
  FRAX,
  LINK,
  LUSD,
  MATIC,
  MIM,
  OHM,
  OP,
  QUICK,
  SUSHI,
  USDC,
  USDT,
  WBTC,
  WETH9,
  WNATIVE,
  WORMHOLE_USDC,
  WORMHOLE_WBTC,
  WORMHOLE_WETH,
  ZETA_BSC_BRIDGE_USDC,
  ZETA_BSC_BRIDGE_USDT,
  ZETA_ETH_BRIDGE_USDC,
  ZETA_ETH_BRIDGE_USDT,
  axlETH,
  axlUSDC,
  axlWBTC,
} from '../currency'
import {
  STARGATE_USDC,
  STARGATE_USDT,
  STARGATE_WBTC,
  STARGATE_WETH,
} from './stargate'

export const BASES_TO_CHECK_TRADES_AGAINST: {
  readonly [chainId: number]: Token[]
} = {
  [ChainId.ETHEREUM]: [
    WNATIVE[ChainId.ETHEREUM],
    WBTC[ChainId.ETHEREUM],
    USDC[ChainId.ETHEREUM],
    USDT[ChainId.ETHEREUM],
    DAI[ChainId.ETHEREUM],
    MIM[ChainId.ETHEREUM],
    FRAX[ChainId.ETHEREUM],
    OHM[ChainId.ETHEREUM],
    LINK[ChainId.ETHEREUM],
    SUSHI[ChainId.ETHEREUM],
  ],
  [ChainId.RINKEBY]: [WNATIVE[ChainId.RINKEBY], USDC[ChainId.RINKEBY]],
  [ChainId.KOVAN]: [WNATIVE[ChainId.KOVAN], USDC[ChainId.KOVAN]],
  [ChainId.POLYGON]: [
    WNATIVE[ChainId.POLYGON],
    WETH9[ChainId.POLYGON],
    WBTC[ChainId.POLYGON],
    USDC[ChainId.POLYGON],
    USDT[ChainId.POLYGON],
    DAI[ChainId.POLYGON],
    FRAX[ChainId.POLYGON],
    QUICK[ChainId.POLYGON],
    LINK[ChainId.POLYGON],
    AAVE[ChainId.POLYGON],
  ],
  [ChainId.POLYGON_TESTNET]: [
    WNATIVE[ChainId.POLYGON_TESTNET],
    USDC[ChainId.POLYGON_TESTNET],
  ],
  [ChainId.FANTOM]: [
    WNATIVE[ChainId.FANTOM],
    STARGATE_USDC[ChainId.FANTOM],
    STARGATE_USDT[ChainId.FANTOM],
    STARGATE_WETH[ChainId.FANTOM],
    STARGATE_WBTC[ChainId.FANTOM],
    axlUSDC[ChainId.FANTOM],
    MIM[ChainId.FANTOM],
  ],
  [ChainId.GNOSIS]: [
    WNATIVE[ChainId.GNOSIS],
    WETH9[ChainId.GNOSIS],
    USDC[ChainId.GNOSIS],
    USDT[ChainId.GNOSIS],
    new Token({
      chainId: ChainId.GNOSIS,
      address: '0x9C58BAcC331c9aa871AFD802DB6379a98e80CEdb',
      decimals: 18,
      symbol: 'GNO',
      name: 'Gnosis',
    }),
  ],
  [ChainId.BSC]: [
    WNATIVE[ChainId.BSC],
    WETH9[ChainId.BSC],
    USDC[ChainId.BSC],
    USDT[ChainId.BSC],
    DAI[ChainId.BSC],
    BUSD[ChainId.BSC],
    new Token({
      chainId: ChainId.BSC,
      address: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
      decimals: 18,
      symbol: 'BTCB',
      name: 'Binance-Peg BTCB Token',
    }),
    new Token({
      chainId: ChainId.BSC,
      address: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
      decimals: 18,
      symbol: 'Cake',
      name: 'PancakeSwap Token',
    }),
  ],
  [ChainId.ARBITRUM]: [
    WNATIVE[ChainId.ARBITRUM],
    WBTC[ChainId.ARBITRUM],
    USDC[ChainId.ARBITRUM],
    USDT[ChainId.ARBITRUM],
    DAI[ChainId.ARBITRUM],
    MIM[ChainId.ARBITRUM],
    FRAX[ChainId.ARBITRUM],
    LINK[ChainId.ARBITRUM],
    new Token({
      chainId: ChainId.ARBITRUM,
      address: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
      decimals: 6,
      symbol: 'USDC.e',
      name: 'Bridged USDC (Arb1)',
    }),
    new Token({
      chainId: ChainId.ARBITRUM,
      address: '0x912CE59144191C1204E64559FE8253a0e49E6548',
      decimals: 18,
      symbol: 'ARB',
      name: 'Arbitrum',
    }),
    new Token({
      chainId: ChainId.ARBITRUM,
      address: '0xfc5A1A6EB076a2C7aD06eD22C90d7E710E35ad0a',
      decimals: 18,
      symbol: 'GMX',
      name: 'GMX',
    }),
    new Token({
      chainId: ChainId.ARBITRUM,
      address: '0x539bdE0d7Dbd336b79148AA742883198BBF60342',
      decimals: 18,
      symbol: 'MAGIC',
      name: 'MAGIC',
    }),
    new Token({
      chainId: ChainId.ARBITRUM,
      address: '0x8D9bA570D6cb60C7e3e0F31343Efe75AB8E65FB1',
      decimals: 18,
      symbol: 'gOHM',
      name: 'Governance OHM',
    }),
  ],
  [ChainId.ARBITRUM_NOVA]: [
    WNATIVE[ChainId.ARBITRUM_NOVA],
    WBTC[ChainId.ARBITRUM_NOVA],
    USDC[ChainId.ARBITRUM_NOVA],
    USDT[ChainId.ARBITRUM_NOVA],
    DAI[ChainId.ARBITRUM_NOVA],
    new Token({
      chainId: ChainId.ARBITRUM_NOVA,
      address: '0xf823C3cD3CeBE0a1fA952ba88Dc9EEf8e0Bf46AD',
      decimals: 18,
      symbol: 'ARB',
      name: 'Arbitrum',
    }),
    SUSHI[ChainId.ARBITRUM_NOVA],
  ],
  [ChainId.AVALANCHE]: [
    WNATIVE[ChainId.AVALANCHE],
    WETH9[ChainId.AVALANCHE],
    WBTC[ChainId.AVALANCHE],
    USDC[ChainId.AVALANCHE],
    new Token({
      chainId: ChainId.AVALANCHE,
      address: '0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664',
      decimals: 6,
      symbol: 'USDC.e',
      name: 'USD Coin',
    }),
    USDT[ChainId.AVALANCHE],
    new Token({
      chainId: ChainId.AVALANCHE,
      address: '0xc7198437980c041c805A1EDcbA50c1Ce5db95118',
      decimals: 6,
      symbol: 'USDT.e',
      name: 'Tether USD',
    }),
    new Token({
      chainId: ChainId.AVALANCHE,
      address: '0xd586E7F844cEa2F87f50152665BCbc2C279D8d70',
      decimals: 18,
      symbol: 'DAI.e',
      name: 'Dai Stablecoin',
    }),
    MIM[ChainId.AVALANCHE],
    new Token({
      chainId: ChainId.AVALANCHE,
      address: '0x0da67235dD5787D67955420C84ca1cEcd4E5Bb3b',
      decimals: 18,
      name: 'Wrapped MEMO',
      symbol: 'WMEMO',
    }),
  ],

  [ChainId.HECO]: [
    WNATIVE[ChainId.HECO],
    USDC[ChainId.HECO],
    USDT[ChainId.HECO],
    DAI[ChainId.HECO],
  ],
  [ChainId.HARMONY]: [
    WNATIVE[ChainId.HARMONY],
    USDC[ChainId.HARMONY],
    USDT[ChainId.HARMONY],
    DAI[ChainId.HARMONY],
    FRAX[ChainId.HARMONY],
  ],
  [ChainId.OKEX]: [
    WNATIVE[ChainId.OKEX],
    USDC[ChainId.OKEX],
    USDT[ChainId.OKEX],
    DAI[ChainId.OKEX],
  ],
  [ChainId.CELO]: [
    WNATIVE[ChainId.CELO],
    WETH9[ChainId.CELO],
    WBTC[ChainId.CELO],
    USDC[ChainId.CELO],
    USDT[ChainId.CELO],
    DAI[ChainId.CELO],
    new Token({
      chainId: ChainId.CELO,
      address: '0xD8763CBa276a3738E6DE85b4b3bF5FDed6D6cA73',
      decimals: 18,
      symbol: 'cEUR',
      name: 'Celo Euro',
    }),
    new Token({
      chainId: ChainId.CELO,
      address: '0x765DE816845861e75A25fCA122bb6898B8B1282a',
      decimals: 18,
      symbol: 'cUSD',
      name: 'Celo Dollar',
    }),
    new Token({
      chainId: ChainId.CELO,
      address: '0x2DEf4285787d58a2f811AF24755A8150622f4361',
      decimals: 18,
      symbol: 'cETH',
      name: 'Celo Ether',
    }),
    new Token({
      chainId: ChainId.CELO,
      address: '0x66803FB87aBd4aaC3cbB3fAd7C3aa01f6F3FB207',
      decimals: 18,
      symbol: 'WETH',
      name: 'Wrapped Ether (Wormhole)',
    }),
  ],
  [ChainId.PALM]: [WNATIVE[ChainId.PALM]],
  [ChainId.MOONRIVER]: [
    WNATIVE[ChainId.MOONRIVER],
    USDC[ChainId.MOONRIVER],
    USDT[ChainId.MOONRIVER],
    DAI[ChainId.MOONRIVER],
    MIM[ChainId.MOONRIVER],
    FRAX[ChainId.MOONRIVER],
  ],
  [ChainId.FUSE]: [
    WNATIVE[ChainId.FUSE],
    USDC[ChainId.FUSE],
    USDT[ChainId.FUSE],
    DAI[ChainId.FUSE],
  ],
  [ChainId.TELOS]: [
    WNATIVE[ChainId.TELOS],
    USDC[ChainId.TELOS],
    USDT[ChainId.TELOS],
  ],
  [ChainId.MOONBEAM]: [
    WNATIVE[ChainId.MOONBEAM],
    axlUSDC[ChainId.MOONBEAM],
    WORMHOLE_USDC[ChainId.MOONBEAM],
    WORMHOLE_WETH[ChainId.MOONBEAM],
    WORMHOLE_WBTC[ChainId.MOONBEAM],
    FRAX[ChainId.MOONBEAM],
  ],
  [ChainId.OPTIMISM]: [
    WNATIVE[ChainId.OPTIMISM],
    WBTC[ChainId.OPTIMISM],
    USDC[ChainId.OPTIMISM],
    new Token({
      chainId: ChainId.OPTIMISM,
      address: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607',
      decimals: 6,
      symbol: 'USDC',
      name: 'USD Coin (Bridged from Ethereum)',
    }),
    USDT[ChainId.OPTIMISM],
    DAI[ChainId.OPTIMISM],
    LUSD[ChainId.OPTIMISM],
    FRAX[ChainId.OPTIMISM],
    new Token({
      chainId: ChainId.OPTIMISM,
      address: '0xC84Da6c8ec7A57cD10B939E79eaF9d2D17834E04',
      decimals: 18,
      symbol: 'vUSD',
      name: 'vUSD',
    }),
    OP[ChainId.OPTIMISM],
  ],
  [ChainId.KAVA]: [
    WNATIVE[ChainId.KAVA],
    STARGATE_WETH[ChainId.KAVA],
    STARGATE_USDT[ChainId.KAVA],
    axlUSDC[ChainId.KAVA],
    axlETH[ChainId.KAVA],
    axlWBTC[ChainId.KAVA],
  ],
  [ChainId.METIS]: [
    WNATIVE[ChainId.METIS],
    WETH9[ChainId.METIS],
    WBTC[ChainId.METIS],
    USDC[ChainId.METIS],
    USDT[ChainId.METIS],
    DAI[ChainId.METIS],
  ],
  [ChainId.BOBA]: [
    WNATIVE[ChainId.BOBA],
    WBTC[ChainId.BOBA],
    USDC[ChainId.BOBA],
    USDT[ChainId.BOBA],
    DAI[ChainId.BOBA],
    FRAX[ChainId.BOBA],
  ],
  [ChainId.BOBA_AVAX]: [
    WNATIVE[ChainId.BOBA_AVAX],
    new Token({
      chainId: ChainId.BOBA_AVAX,
      address: '0x4200000000000000000000000000000000000023',
      decimals: 18,
      symbol: 'AVAX',
      name: 'Avax',
    }),
    USDT[ChainId.BOBA_AVAX],
    USDC[ChainId.BOBA_AVAX],
  ],
  [ChainId.BOBA_BNB]: [
    WNATIVE[ChainId.BOBA_BNB],
    new Token({
      chainId: ChainId.BOBA_BNB,
      address: '0x4200000000000000000000000000000000000023',
      decimals: 18,
      symbol: 'BNB',
      name: 'Binance Coin',
    }),
    USDT[ChainId.BOBA_BNB],
    USDC[ChainId.BOBA_BNB],
  ],
  [ChainId.BTTC]: [
    WNATIVE[ChainId.BTTC],
    WETH9[ChainId.BTTC],
    USDC[ChainId.BTTC],
    USDT[ChainId.BTTC],
  ],
  [ChainId.POLYGON_ZKEVM]: [
    WNATIVE[ChainId.POLYGON_ZKEVM],
    MATIC[ChainId.POLYGON_ZKEVM],
    USDC[ChainId.POLYGON_ZKEVM],
    USDT[ChainId.POLYGON_ZKEVM],
    DAI[ChainId.POLYGON_ZKEVM],
    WBTC[ChainId.POLYGON_ZKEVM],
    FRAX[ChainId.POLYGON_ZKEVM],
  ],
  [ChainId.THUNDERCORE]: [
    WNATIVE[ChainId.THUNDERCORE],
    WETH9[ChainId.THUNDERCORE],
    WBTC[ChainId.THUNDERCORE],
    USDC[ChainId.THUNDERCORE],
    USDT[ChainId.THUNDERCORE],
  ],
  [ChainId.HAQQ]: [
    WNATIVE[ChainId.HAQQ],
    WETH9[ChainId.HAQQ],
    WBTC[ChainId.HAQQ],
    USDC[ChainId.HAQQ],
    USDT[ChainId.HAQQ],
    DAI[ChainId.HAQQ],
  ],
  [ChainId.CORE]: [
    WNATIVE[ChainId.CORE],
    WETH9[ChainId.CORE],
    USDC[ChainId.CORE],
    USDT[ChainId.CORE],
  ],
  [ChainId.ZKSYNC_ERA]: [
    WNATIVE[ChainId.ZKSYNC_ERA],
    WBTC[ChainId.ZKSYNC_ERA],
    USDC[ChainId.ZKSYNC_ERA],
  ],
  [ChainId.LINEA]: [
    WNATIVE[ChainId.LINEA],
    USDC[ChainId.LINEA],
    DAI[ChainId.LINEA],
  ],
  [ChainId.BASE]: [
    WNATIVE[ChainId.BASE],
    new Token({
      chainId: ChainId.BASE,
      address: '0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22',
      decimals: 18,
      symbol: 'cbETH',
      name: 'Coinbase Wrapped Staked ETH',
    }),
    USDC[ChainId.BASE],
    new Token({
      chainId: ChainId.BASE,
      address: '0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA',
      decimals: 6,
      symbol: 'USDbC',
      name: 'USD Base Coin',
    }),
    axlUSDC[ChainId.BASE],
    DAI[ChainId.BASE],
  ],
  [ChainId.SCROLL]: [
    WNATIVE[ChainId.SCROLL],
    WBTC[ChainId.SCROLL],
    USDC[ChainId.SCROLL],
    USDT[ChainId.SCROLL],
  ],
  [ChainId.FILECOIN]: [
    WNATIVE[ChainId.FILECOIN],
    USDC[ChainId.FILECOIN],
    DAI[ChainId.FILECOIN],
  ],
  [ChainId.ZETACHAIN]: [
    WNATIVE[ChainId.ZETACHAIN],
    WETH9[ChainId.ZETACHAIN],
    WBTC[ChainId.ZETACHAIN],
    ZETA_ETH_BRIDGE_USDC,
    ZETA_ETH_BRIDGE_USDT,
    ZETA_BSC_BRIDGE_USDC,
    ZETA_BSC_BRIDGE_USDT,
  ],
}
