import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../../../actions/users.actions'

const HomePage = ({
  users,
  getUsers,
}) => {

  useEffect(() => {
    if(!users) {
      getUsers()
    }
  })
  
	return <div>
		<h1>Home</h1>
		<h2>Landing page</h2>
    <ul>
      {users && users.map((user, index) => 
        <li key={index}>{user.name}</li>
      )}
    </ul>
	</div>
}

const mapStateToProps = state => ({
  users: state.usersReducer.users
})

const mapDispatchToProps = dispatch => ({
  getUsers: () => {
    return dispatch(getUsers())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)
