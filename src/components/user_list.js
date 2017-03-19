import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class UserList extends Component {

  componentWillMount() {
    this.props.fetchUsers();
  }

  renderUser(user, i) {
    return (
      <div key={i} className="card card-block">
        <h4 className="card-title">{user.name}</h4>
        <p className="card-text"> {user.phone} </p>
        <a href="{user.website}" className="btn btn-primary">{user.website}</a>
        
      </div> 
    )
  }

  render() {
    console.log(this.props);
    return (

      <div className="user-list">
        <h2 style={{ marginTop: "35px" }}> LIST OF PEOPLE WHO HAVE WEBSITES </h2>
        { this.props.users.map(this.renderUser)}
      </div>
    );
  }
}

function mapStateToProps(state){
  return { users: state.users }
}

export default connect(mapStateToProps, actions)(UserList);