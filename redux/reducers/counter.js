// REDUCERS
import * as actionTypes from '../constants/index';
import { counterState }from '../InitialState/index';

const reducer = (state = counterState, action) => {
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
                count: counterState.count
            })
        default:
            return state
    }
}

export default reducer;