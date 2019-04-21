import React, { Component } from 'react';
import { connect } from 'react-redux';


class Users extends Component {

  render() {
    const users = this.props.users.map((user, index) => <li key={user.username+index} >{user.username}</li>)
    return (
      <div>
        <ul>
          {users}
        </ul>
        <p>{users.length}</p>
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return {users: state.users}
}

export default connect(mapStateToProps)(Users)
