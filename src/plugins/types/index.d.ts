export interface GlobalProviderConfig {
  Provider: React.ComponentType<any>
  props?: Record<string, unknown>
}

type RouteProviderConfig = GlobalProviderConfig

export type RouteProvidersConfig = Record<string, RouteProviderConfig>
