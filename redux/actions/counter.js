// ACTIONS
import * as actionTypes from '../constants/index'


export const incrementCount = () => {
    return { type: actionTypes.INCREMENT }
}

export const decrementCount = () => {
    return { type: actionTypes.DECREMENT }
}

export const resetCount = () => {
    return { type: actionTypes.RESET }
}