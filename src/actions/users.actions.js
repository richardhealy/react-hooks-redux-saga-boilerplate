export const actions = {
  USERS: {
    GET: 'USERS_GET',
    SUCCESS: 'USERS_SUCCESS',
    FAILURE: 'USERS_FAILURE'
  }
}

export const getUsers = () => ({
  type: actions.USERS.GET
})

export const getUsersSuccess = users => ({
  type: actions.USERS.SUCCESS,
  users
})

export const getUsersFailure = error => ({
  type: actions.USERS.FAILURE,
  error
})