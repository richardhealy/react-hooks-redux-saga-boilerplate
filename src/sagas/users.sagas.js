import { all, call, put, takeEvery } from 'redux-saga/effects'
//import { push } from 'react-router-redux'
import agent from '../agents'

import {
  actions as usersActions,
  getUsersSuccess,
  getUsersFailure,
} from '../actions/users.actions'

//import * as routes from '../constants/routes'

function *getUsersSaga () {
  try {
    const data = yield call(agent.Users.get)
    yield put(getUsersSuccess(data))
  } catch (error) {
    yield put(getUsersFailure(error))
  }
}

export default function* usersSagas () {
  yield all([
    takeEvery(usersActions.USERS.GET, getUsersSaga)
  ])
}