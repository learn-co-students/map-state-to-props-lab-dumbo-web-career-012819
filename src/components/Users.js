import React, { Component } from 'react';
import { connect } from 'react-redux'
class Users extends Component {

     li = () => {
        return this.props.users.map(user => {
            return <li>{user.username}</li>
        })
    }

    count = () => {
        return this.props.users.length
    }

  render() {
      console.log(this.props);
    return (
      <div>
        <h4>{this.props.users.length}</h4>
        <ul>
         {this.li()}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = state => {
    return {users: state.users,
            userCount: 0
        }
}
export default connect(mapStateToProps)(Users)
