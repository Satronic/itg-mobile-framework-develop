import { components } from './components'
import { contexts } from './contexts'
import { hooks } from './hooks'

export const examplePluginComponents = components

export const examplePluginContexts = contexts

export const examplePluginHooks = hooks

// Aquí puedes agregar más elementos que el plugin necesite exportar, como:
// - Servicios (por ejemplo, API client services)
// - Utilidades (por ejemplo, funciones helper)
// - Tipos y constantes

// Ejemplo:
// export { services } from './services'
// export { utils } from './utils'
// export { types, constants } from './types'

// Es recomendable seguir la nomenclatura: `examplePluginServices`, `examplePluginUtils`, etc.
// con el nombre de su plugin, para mantener consistencia en el nombre de las exportaciones.

// Elimina cualquier exportación que no sea necesaria para el plugin específico que estás desarrollando.
