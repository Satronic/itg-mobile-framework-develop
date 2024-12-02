import React from 'react'
import Core from 'itg-core'
import analytics from '@react-native-firebase/analytics'
import { components as ecommerceComponents } from 'itg-ecommerce-plugin'

import { customComponents as components } from './components'
import { GlobalStyles } from './styles/config/styles'
import { Styles } from './styles'
import { plugins } from '../plugins.config'
import routePlugins from './plugins/RoutePlugins'
import globalPlugins from './plugins/GlobalPlugins'

const App = () => {
  analytics().setAnalyticsCollectionEnabled(true)

  return (
    <Core
      globalPlugins={globalPlugins}
      routePlugins={routePlugins}
      components={{ ...ecommerceComponents, ...components }}
      data={{ GlobalStyles, Styles }}
      plugins={plugins}
    />
  )
}

export default App
