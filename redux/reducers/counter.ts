// REDUCERS
import * as actionTypes from '../constants/index';

interface State {
    count: number
}

interface Action {
    type: string
}

const initState: State = {
    count: 0
}

const reducer = (state: State = initState, action: Action) :State => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return Object.assign({}, state, {
                count: state.count + 1
            })
        case actionTypes.DECREMENT:
            return Object.assign({}, state, {
                count: state.count - 1
            })
        case actionTypes.RESET:
            return Object.assign({}, state, {
                count: initState.count
            })
        default:
            return state
    }
}

export default {reducer, initState};