// Asegúrate de ajustar el tipado en este archivo según las necesidades específicas de tu contexto.

export type Dispatch = (action: Action) => void

export type Action =
  | { type: 'RESET_CONFIG' }
  | {
      type: 'SET_CONFIG'
      args: {
        value: Record<string, unknown>
      }
    }

export interface Props {
  children?: JSX.Element[] | JSX.Element
  data?: State
}

export interface State {
  config: Record<string, unknown>
}
