# Registro de Componentes Personalizados

En este proyecto, se ofrece la posibilidad para los desarrolladores de registrar componentes personalizados directamente desde la plantilla. Esto se realiza a través del archivo "index.tsx" ubicado en la ruta `/src/components`.

## Estructura del Registro de Componentes

Dentro de la carpeta `/src/components`, el archivo "index.tsx" exporta un objeto que actúa como el registro de componentes. En este objeto, cada clave representa el nombre del componente y el valor asociado es el propio componente.

## Ejemplo de Registro

Para ilustrar la implementación, se proporciona una estructura básica de un componente llamado "rich-text". Puedes encontrar el código de ejemplo en la ruta `/src/components/RichText`, y este componente está registrado en el archivo "index.tsx" dentro de la carpeta "components".

```tsx
// Ejemplo de registro del componente "rich-text"
import RichText from './RichText'

type AllowedComponents = Record<string, any>

export const customComponents: AllowedComponents = {
  // ...otros componentes registrados
  'rich-text': RichText,
  // ...otros componentes registrados
}
```
