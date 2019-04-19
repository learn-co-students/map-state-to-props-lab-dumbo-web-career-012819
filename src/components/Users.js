import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {
 
  render() {

  	const displayedUsers = this.props.users.map(user => {
  	  return <li>{user.username}</li>
  	})

    return (
      <div>
      	<h4>Total users: {this.props.userCount}</h4>
        <ul>
          {displayedUsers}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

const mapStateToProps = (state) => {
	console.log(state)
	return { users: state.users, userCount: state.users.length }
}

export default connect(mapStateToProps)(Users)
