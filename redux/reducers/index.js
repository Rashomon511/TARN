import { combineReducers } from 'redux'
import counter from './counter'
import list from './list'

const rootReducer = combineReducers({
    counter: counter.reducer,
    list: list.reducer
})

const InitialState = {
    counter: counter.initState,
    list: list.initState
}
export {rootReducer, InitialState}