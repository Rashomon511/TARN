// ACTIONS
import * as actionTypes from '../constants/index'

interface Action {
    type: string
}

export const incrementCount = (): Action => {
    return { type: actionTypes.INCREMENT }
}

export const decrementCount = (): Action => {
    return { type: actionTypes.DECREMENT }
}

export const resetCount = (): Action => {
    return { type: actionTypes.RESET }
}