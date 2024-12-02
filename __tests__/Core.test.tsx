import React from 'react'
import { render } from '@testing-library/react-native'

import App from '../src'

describe('App Core', () => {
  it('renders correctly', () => {
    const { UNSAFE_root: root } = render(<App />)

    expect(root).toBeDefined()
  })
})
