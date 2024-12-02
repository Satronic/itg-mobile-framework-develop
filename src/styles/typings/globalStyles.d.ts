import type { TextStyle, ViewStyle } from 'react-native'

export interface GlobalStylesType {
  backgroundColor: {
    base: string
    base09: string
    baseInverted: string
    actionPrimary: string
    actionSecondary: string
    actionTertiary: string
    actionQuaternary: string
    disabled: string
    success: string
    danger: string
    warning: string
    backgroundCommon: string
    defaultModalBackground: string
    modalBackground: string
    inactive: string
  }
  typography: {
    heading1: TextStyle
    heading2: TextStyle
    heading3: TextStyle
    heading4: TextStyle
    heading5: TextStyle
    body: TextStyle
    small: TextStyle
    mini: TextStyle
  }
  spacing: number[]
  colors: {
    primaryColor: string
    secondaryColor: string
    tertiaryColor: string
    quaternaryColor: string
    baseTextColor: string
  }
  button: {
    buttonPrimary: ViewStyle | TextStyle
    buttonSecondary: ViewStyle | TextStyle
    buttonTertiary: ViewStyle | TextStyle
    buttonQuaternary: ViewStyle | TextStyle
  }
  notification: {
    success: ViewStyle | TextStyle
    warning: ViewStyle | TextStyle
    error: ViewStyle | TextStyle
  }
  pushNotification: {
    container: ViewStyle
    content: ViewStyle
    title: TextStyle
    body: TextStyle
  }
}
