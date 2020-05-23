const node_env = process.env.NODE_ENV

export const isDevelopmentEnv = node_env === "development"

export const isProductionEnv = node_env === "production"

export const isTestEnv = node_env === "test"
