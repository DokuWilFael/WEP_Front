import React, { Component } from 'react';

import { connect } from 'react-redux';

import { connectUser, connectUserId } from '../actions/actions.js';

import { getUser, getAllUser, updateUser } from './RequestManager.js';

class ConnectForm extends Component{
  constructor(props){
    super(props);
    
    this.state={
      user: '',
      userId: 3
    };

    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Username" onChange={this.handleUserChange}>
        </input>
        <input type='submit' value='Connect' />
      </form>
    );
  }

  handleUserChange(e){
    this.setState({user:e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    updateUser(19,"toto",[]).then(
      data => {
        console.log(data);
        getAllUser().then(data => {console.log(data);});
        this.props.connectUser(this.state.user);
        this.props.connectUserId(this.state.userId);
      }
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user : state.user,
    userId : state.userId
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    connectUser : (value) => {dispatch(connectUser(value))},
    connectUserId : (value) => {dispatch(connectUserId(value))},
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (ConnectForm);
