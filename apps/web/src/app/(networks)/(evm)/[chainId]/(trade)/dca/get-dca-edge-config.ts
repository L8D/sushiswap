interface DCAEdgeConfig {
  maintenance: boolean
}

const getDCAEdgeConfig = async () => {
  return { maintenance: false }
}

export { type DCAEdgeConfig, getDCAEdgeConfig }
