// ACTIONS
import * as actionTypes from '../constants/index'


interface Action {
    type: string
    [propName: string]: any
}

export const loadDataSuccess = (data: any[]): Action => {
    return { type: actionTypes.LOADSUCCESS, data }
}

export const loadData = (): Action => {
    return { type: actionTypes.LOADDATA }
}

export const failure = (data: string): Action => {
    return {
        type: actionTypes.FAILURE,
        data
      }
}