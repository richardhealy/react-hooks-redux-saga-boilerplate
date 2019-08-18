import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import usersReducer from './users.reducer'


export default history =>
  combineReducers({
    router: connectRouter(history),
    usersReducer,
  })
