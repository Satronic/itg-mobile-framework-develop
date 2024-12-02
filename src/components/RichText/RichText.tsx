import React from 'react'
import { Text } from 'react-native'

interface Props {
  text: string
}

export const RichText = ({ text }: Props) => {
  return <Text testID="priority-custom-component">{text}</Text>
}
