// ACTIONS
import * as actionTypes from '../constants/index'


export const loadDataSuccess = (data: []) => {
    return { type: actionTypes.LOADSUCCESS, data }
}

export const loadData = () => {
    return { type: actionTypes.LOADDATA }
}

export const failure = (data: string) => {
    return {
        type: actionTypes.FAILURE,
        data
      }
}