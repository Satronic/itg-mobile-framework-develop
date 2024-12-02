import {
  OrderPlacedProvider,
  OrderDetailProvider,
  ProductDetailProvider,
  ProductListPageProvider,
} from 'itg-ecommerce-plugin/contexts'

import type { RouteProvidersConfig } from './types'

const routePlugins: RouteProvidersConfig = {
  Product: {
    Provider: ProductDetailProvider,
  },
  Search: {
    Provider: ProductListPageProvider,
  },
  OrderDetail: {
    Provider: OrderDetailProvider,
  },
  OrderPlaced: {
    Provider: OrderPlacedProvider,
  },
}

export default routePlugins
