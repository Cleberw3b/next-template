const nodeEnv = process.env.NODE_ENV

export const isDevelopmentEnv = nodeEnv === "development"

export const isProductionEnv = nodeEnv === "production"

export const isTestEnv = nodeEnv === "test"
