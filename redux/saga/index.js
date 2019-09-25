import list from './list'
import { fork, all } from 'redux-saga/effects'
export default function* rootSaga() {
    yield all([
        fork(list),
      ])
}