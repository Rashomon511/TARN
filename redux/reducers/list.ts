// REDUCERS
import * as actionTypes from '../constants/index';

const initState = {
    data: ''
}

const reducer = (state = initState, action: any) => {
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