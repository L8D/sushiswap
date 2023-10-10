import { ChainId } from 'sushi/chain'

export const FURO_SUPPORTED_CHAIN_IDS = [
  ChainId.ARBITRUM,
  ChainId.AVALANCHE,
  ChainId.BSC,
  ChainId.BTTC,
  ChainId.ETHEREUM,
  ChainId.FANTOM,
  ChainId.GNOSIS,
  // ChainId.HARMONY,
  ChainId.MOONBEAM,
  ChainId.MOONRIVER,
  ChainId.OPTIMISM,
  ChainId.POLYGON,
] as const

export type FuroChainId = typeof FURO_SUPPORTED_CHAIN_IDS[number]

export const FURO_STREAM_ADDRESS: Record<FuroChainId, `0x${string}`> = {
  [ChainId.ARBITRUM]: '0x4ab2FC6e258a0cA7175D05fF10C5cF798A672cAE',
  [ChainId.AVALANCHE]: '0x4ab2FC6e258a0cA7175D05fF10C5cF798A672cAE',
  [ChainId.BSC]: '0x4ab2FC6e258a0cA7175D05fF10C5cF798A672cAE',
  [ChainId.BTTC]: '0x3DB923FBaB372ab8c796Fef9bb8341CdB37cB9eC',
  [ChainId.ETHEREUM]: '0x4ab2FC6e258a0cA7175D05fF10C5cF798A672cAE',
  [ChainId.FANTOM]: '0x4ab2FC6e258a0cA7175D05fF10C5cF798A672cAE',
  [ChainId.GNOSIS]: '0x4ab2FC6e258a0cA7175D05fF10C5cF798A672cAE',
  // [ChainId.HARMONY]: '',
  [ChainId.MOONBEAM]: '0x4ab2FC6e258a0cA7175D05fF10C5cF798A672cAE',
  [ChainId.MOONRIVER]: '0x4ab2FC6e258a0cA7175D05fF10C5cF798A672cAE',
  [ChainId.OPTIMISM]: '0x4ab2FC6e258a0cA7175D05fF10C5cF798A672cAE',
  [ChainId.POLYGON]: '0x4ab2FC6e258a0cA7175D05fF10C5cF798A672cAE',
} as const

export const FURO_STREAM_ROUTER_ADDRESS: Record<FuroChainId, `0x${string}`> = {
  [ChainId.ARBITRUM]: '0xf30CF8D373D78D7964A2F7793b730BF7ae0970a8',
  [ChainId.AVALANCHE]: '0x4947754676098B1D06dE1C602D0086e406154e89',
  [ChainId.BSC]: '0xf30CF8D373D78D7964A2F7793b730BF7ae0970a8',
  [ChainId.BTTC]: '0xc5017BE80b4446988e8686168396289a9A62668E',
  [ChainId.ETHEREUM]: '0x95bd909A9cB3002992E2993846b035545F15ff37',
  [ChainId.FANTOM]: '0xf30CF8D373D78D7964A2F7793b730BF7ae0970a8',
  [ChainId.GNOSIS]: '0xf30CF8D373D78D7964A2F7793b730BF7ae0970a8',
  // [ChainId.HARMONY]: '',
  [ChainId.MOONBEAM]: '0xf30CF8D373D78D7964A2F7793b730BF7ae0970a8',
  [ChainId.MOONRIVER]: '0xf30CF8D373D78D7964A2F7793b730BF7ae0970a8',
  [ChainId.OPTIMISM]: '0xf30CF8D373D78D7964A2F7793b730BF7ae0970a8',
  [ChainId.POLYGON]: '0xf30CF8D373D78D7964A2F7793b730BF7ae0970a8',
} as const

export const FURO_VESTING_ADDRESS: Record<FuroChainId, `0x${string}`> = {
  [ChainId.ARBITRUM]: '0x0689640d190b10765f09310fCfE9C670eDe4E25B',
  [ChainId.AVALANCHE]: '0x0689640d190b10765f09310fCfE9C670eDe4E25B',
  [ChainId.BSC]: '0x0689640d190b10765f09310fCfE9C670eDe4E25B',
  [ChainId.BTTC]: '0x5629CE74DdCAD7Cc72b3Ea30444dA7172AD851D9',
  [ChainId.ETHEREUM]: '0x0689640d190b10765f09310fCfE9C670eDe4E25B',
  [ChainId.FANTOM]: '0x0689640d190b10765f09310fCfE9C670eDe4E25B',
  [ChainId.GNOSIS]: '0x0689640d190b10765f09310fCfE9C670eDe4E25B',
  // [ChainId.HARMONY]: '',
  [ChainId.MOONBEAM]: '0x0689640d190b10765f09310fCfE9C670eDe4E25B',
  [ChainId.MOONRIVER]: '0x0689640d190b10765f09310fCfE9C670eDe4E25B',
  [ChainId.OPTIMISM]: '0x0689640d190b10765f09310fCfE9C670eDe4E25B',
  [ChainId.POLYGON]: '0x0689640d190b10765f09310fCfE9C670eDe4E25B',
} as const

export const FURO_VESTING_ROUTER_ADDRESS: Record<FuroChainId, `0x${string}`> = {
  [ChainId.ARBITRUM]: '0x312A8E33d78d3Ab79E62971E86e5e8c9c5E28D64',
  [ChainId.AVALANCHE]: '0x134C28E1aA0b5F339e498951bAEA9165c4Dbea90',
  [ChainId.BSC]: '0x312A8E33d78d3Ab79E62971E86e5e8c9c5E28D64',
  [ChainId.BTTC]: '0xBD87Bef520f8CEC45d73B0413B6cBb8b061736d9',
  [ChainId.ETHEREUM]: '0x8E190A2173334c67734119791CF63299A7570877',
  [ChainId.FANTOM]: '0x312A8E33d78d3Ab79E62971E86e5e8c9c5E28D64',
  [ChainId.GNOSIS]: '0x312A8E33d78d3Ab79E62971E86e5e8c9c5E28D64',
  // [ChainId.HARMONY]: '',
  [ChainId.MOONBEAM]: '0x312A8E33d78d3Ab79E62971E86e5e8c9c5E28D64',
  [ChainId.MOONRIVER]: '0x312A8E33d78d3Ab79E62971E86e5e8c9c5E28D64',
  [ChainId.OPTIMISM]: '0x312A8E33d78d3Ab79E62971E86e5e8c9c5E28D64',
  [ChainId.POLYGON]: '0x312A8E33d78d3Ab79E62971E86e5e8c9c5E28D64',
} as const

export const isFuroChainId = (chainId: ChainId): chainId is FuroChainId =>
  FURO_SUPPORTED_CHAIN_IDS.includes(chainId as FuroChainId)
