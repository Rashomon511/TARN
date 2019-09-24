import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers/index'
import * as InitialState from './InitialState/index'


export function initializeStore (initialState = InitialState) {
  return createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware())
  )
}
