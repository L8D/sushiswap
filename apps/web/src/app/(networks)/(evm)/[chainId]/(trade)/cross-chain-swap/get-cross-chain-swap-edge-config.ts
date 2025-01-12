interface CrossChainSwapEdgeConfig {
  maintenance: boolean
}

const getCrossChainSwapEdgeConfig = async () => {
  return { maintenance: false }
}

export { type CrossChainSwapEdgeConfig, getCrossChainSwapEdgeConfig }
