/* global fetch */

import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'

import * as actionTypes from '../constants/index';

import { loadDataSuccess,  failure} from '../actions/list'

es6promise.polyfill()


function * loadDataSaga () {
  try {
    const res = yield fetch('https://jsonplaceholder.typicode.com/users')
    const data = yield res.json()
    yield put(loadDataSuccess(data))
  } catch (err) {
    yield put(failure(err))
  }
}

function * list () {
  yield all([
    takeLatest(actionTypes.LOADDATA, loadDataSaga)
  ])
}

export default list