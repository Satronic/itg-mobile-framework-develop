import React from 'react'
import 'react-native'
import renderer from 'react-test-renderer'
import App from 'itg-core'

test('renders correctly', () => {
  renderer.create(<App />)
})
