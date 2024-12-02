/**
 * @format
 */
import 'react-native-gesture-handler'
import { AppRegistry } from 'react-native'

import { name as appName } from './app.json'
import App from './src'

if (__DEV__) {
  // eslint-disable-next-line global-require
  require('./ReactotronConfig')
}

AppRegistry.registerComponent(appName, () => App)
