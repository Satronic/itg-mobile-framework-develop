import {
  GlobalStylesProvider,
  CustomStylesProvider,
  OrderFormProvider,
  ConfigProvider,
  AutocompleteProvider,
  NotificationsProvider,
  WishListProvider,
  PushNotificationContainer,
} from 'itg-ecommerce-plugin/contexts'

import { plugins } from '../../plugins.config'
import { Styles } from '../styles'
import { GlobalStyles } from '../styles/config/styles'
import type { GlobalProviderConfig } from './types'
import useStyles from '../styles/hooks/useStyles'

const globalPlugins: GlobalProviderConfig[] = [
  /*
    TODO: Mejorar la forma de llamar la configuración del config Provider para no tener que usar la posición
  */
  {
    Provider: ConfigProvider,
    props: { data: { config: plugins[1].options } },
  },
  {
    Provider: OrderFormProvider,
    props: {},
  },
  {
    Provider: GlobalStylesProvider,
    props: { data: GlobalStyles },
  },
  {
    Provider: CustomStylesProvider,
    props: { data: { styles: Styles, useStyles } },
  },
  {
    Provider: NotificationsProvider,
    props: {},
  },
  {
    Provider: PushNotificationContainer,
    props: {},
  },
  {
    Provider: AutocompleteProvider,
    props: {},
  },
  {
    Provider: WishListProvider,
    props: {},
  },
]

export default globalPlugins
