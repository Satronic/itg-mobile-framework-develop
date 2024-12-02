import React from 'react'
import { Text } from 'react-native'

export const ExampleComponent = ({ title }: Props) => {
  return <Text testID="example-component">{title}</Text>
}
