import React from 'react'
import { render, screen } from '@testing-library/react-native'

import RichText from '../src/components/RichText'

describe('Custom Component', () => {
  it('renders correctly', () => {
    render(<RichText text={'hola soy el custom'} />)
    expect(screen.getByTestId('priority-custom-component')).toBeTruthy()
  })
})
