import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import {rootReducer, InitialState} from './reducers/index'
import rootSaga from './saga/index'


const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

function initializeStore (initialState = InitialState) {
  const sagaMiddleware = createSagaMiddleware()
  const store: any = createStore(
    rootReducer,
    initialState,
    bindMiddleware([sagaMiddleware])
  )
  store.sagaTask = sagaMiddleware.run(rootSaga)

  return store
}

export default initializeStore
