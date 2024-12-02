# Arquitectura de componentes

Es importante seguir buenas prácticas y mantener la mantenibilidad al desarrollar componentes personalizados en una aplicación. La arquitectura que adoptamos separa la capa de lógica de la capa de presentación. A continuación, se muestra un ejemplo de un componente de texto que sigue esta arquitectura:

## Componente de texto

El componente de texto consta de tres partes principales: el contenedor (RichTextContainer), la representación visual (RichText) y la capa de lógica (useRichText). Veamos cada uno de ellos:

### RichTextContainer

El contenedor (RichTextContainer) es responsable de unificar la capa de lógica con la capa de presentación. Se encarga de inicializar y compartir los datos necesarios al componente de presentación (RichText). Aquí está el código:

```tsx
import React from 'react'

import { RichText } from './RichText'
import { useRichText } from './useRichText'

interface Props {
  text: string
}

const RichTextContainer = ({ text }: Props) => {
  const richTextProps = useRichText()

  return <RichText {...richTextProps} text={text} />
}

export default RichTextContainer
```

En este componente, se utiliza un hook personalizado (useRichText) para obtener las propiedades y desarrollar cualquier tipo de lógica necesaria para el componente y luego se pasa al componente de presentación (RichText).

### RichText

El componente de presentación (RichText) se encarga únicamente de mostrar la información. No tiene lógica de negocio y se centra únicamente en la representación visual. Aquí está el código:

```tsx
import React from 'react'
import { Text } from 'react-native'

interface Props {
  text: string
}

export const RichText = ({ text }: Props) => {
  return <Text testID="priority-custom-component">{text}</Text>
}
```

Este componente recibe los datos del contenedor y los renderiza visualmente utilizando un componente Text de React Native.

Siguiendo esta arquitectura, mantenemos la separación de responsabilidades entre la lógica de negocio y la presentación, lo que facilita la mantenibilidad y la escalabilidad de la aplicación.

Este enfoque de separación de lógica puede aplicarse a otros componentes de la aplicación, lo que ayuda a mantener un código limpio y modular.
