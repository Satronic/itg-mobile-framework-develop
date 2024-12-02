import React, { createContext, useContext, useReducer } from 'react'

import type { Action, Dispatch, Props, State } from './typings/config.d.ts'

// Contexto para la configuración
// Este es un ejemplo de contexto. Puedes usarlo como referencia para crear
// otros contextos en tu aplicación. Si no necesitas este contexto en particular,
// puedes eliminarlo.
// Asegúrate de siempre exportar el Provider, el hook para el estado (use), y el hook para el dispatch (useDispatch).

// Estado inicial para el contexto
const defaultState: State = {
  config: {},
}

// Reducer para manejar las acciones del contexto
const reducer: React.Reducer<State, Action> = (
  state: State,
  action: Action
) => {
  switch (action.type) {
    case 'SET_CONFIG': {
      const { args } = action

      return { ...state, config: args.value }
    }

    case 'RESET_CONFIG': {
      return defaultState
    }

    default: {
      return state
    }
  }
}

// Contextos para el estado y el dispatch
const ConfigContext = createContext<State>(defaultState)
const ConfigDispatchContext = createContext<Dispatch | undefined>(undefined)

// Proveedor del contexto
const ConfigProvider: React.FC<Props> = ({ children, data }: Props) => {
  const initialState = data ?? defaultState

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <ConfigContext.Provider value={state}>
      <ConfigDispatchContext.Provider value={dispatch}>
        {children}
      </ConfigDispatchContext.Provider>
    </ConfigContext.Provider>
  )
}

// Hook para acceder al contexto
const useConfig = () => {
  const context = useContext(ConfigContext)

  if (context === undefined) {
    throw new Error('useConfig must be used within a ConfigProvider')
  }

  return context
}

// Hook para acceder al dispatch del contexto
const useConfigDispatch = (): Dispatch => {
  const context = useContext(ConfigDispatchContext)

  if (context === undefined) {
    throw new Error('useConfigDispatch must be used within a ConfigProvider')
  }

  return context
}

export { ConfigProvider, useConfig, useConfigDispatch }
