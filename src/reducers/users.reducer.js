import { actions as usersActions } from '../actions/users.actions'

const initialState = {
  users:null
}

const rootReducer = (state = initialState , action) => {
  switch (action.type) {
    case usersActions.USERS.SUCCESS:
      return {
        ...state,
        users:action.users
      }
    default:
      return state
  }
}

export default rootReducer;