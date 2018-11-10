import React, { Component } from 'react';

import { connect } from 'react-redux';

import { connectUser, connectUserId, handleConnected }
  from '../actions/actions.js';

import { getAllUser, createUser } from './RequestManager.js';

import { User, findUser } from './Utils.js';

class SignForm extends Component{
  constructor(props){
    super(props);
    
    this.state={
      user: ''
    };

    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Username" onChange={this.handleUserChange}>
        </input>
        <input type='submit' value='Sign' />
      </form>
    );
  }

  handleUserChange(e){
    this.setState({user:e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    getAllUser().then(
      data => {
        var id = findUser(this.state.user,data);
        if(id===-1){
          var newUser = new User(this.state.user,[]);
          createUser(newUser).then( data => {
            alert('User created! You can connect now');}
          );
        }else{
          alert('User already exist, please choose another name');
          //this.props.connectUser(this.state.user);
          //this.props.handleConnected(true);
          //this.props.connectUserId(id);
        }
      }
    );
  }

}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    connectUser: (value) => {dispatch(connectUser(value))},
    connectUserId: (value) => {dispatch(connectUserId(value))},
    handleConnected: (value) => {dispatch(handleConnected(value))}
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (SignForm);
