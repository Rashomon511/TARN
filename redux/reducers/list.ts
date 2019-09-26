// REDUCERS
import * as actionTypes from '../constants/index';

interface State {
    data: any[]
}

interface Action {
    type: string
    [propName: string]: any
}

const initState: State = {
    data: []
}

const reducer = (state: State = initState, action: Action): State => {
    switch (action.type) {
        case actionTypes.LOADSUCCESS:
            return {
                ...state,
                data: action.data
            }
        case actionTypes.FAILURE:
            return {
                ...state,
                data: action.data
            }
        default:
            return state
    }
}

export default {reducer, initState};