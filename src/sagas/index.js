import { all, spawn } from 'redux-saga/effects'

import usersSagas from './users.sagas'

export default function* rootSaga() {
  yield all([
    spawn(usersSagas),
  ])
}
