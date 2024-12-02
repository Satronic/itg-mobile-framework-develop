import React from 'react'

import { ExampleComponent } from './ExampleComponent'
import { useExampleComponent } from './useExampleComponent'

const ExampleComponentContainer = (props: Props) => {
  const exampleComponentProps = useExampleComponent()

  return <ExampleComponent {...exampleComponentProps} {...props} />
}

export default ExampleComponentContainer
