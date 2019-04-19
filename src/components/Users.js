import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  mapUsers = () => {
    return this.props.users.map(user => <li>{user.username}</li>)
  }

  render() {
    return (
      <div>
        <ul>
          {this.mapUsers()}
        </ul>
          {this.props.userCount}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
    userCount: state.users.length
  }
}

export default connect(mapStateToProps)(Users)
