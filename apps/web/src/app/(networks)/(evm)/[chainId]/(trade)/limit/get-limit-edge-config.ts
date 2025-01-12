interface LimitEdgeConfig {
  maintenance: boolean
}

const getLimitEdgeConfig = async () => {
  return { maintenance: false }
}

export { type LimitEdgeConfig, getLimitEdgeConfig }
