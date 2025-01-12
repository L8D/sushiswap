interface SwapEdgeConfig {
  maintenance: boolean
}

const getSwapEdgeConfig = async () => {
  return { maintenance: false}
}

export { type SwapEdgeConfig, getSwapEdgeConfig }
