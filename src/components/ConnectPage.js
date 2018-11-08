import React, { Component } from 'react';

import { connect } from 'react-redux';

import { connectUser } from '../actions/actions.js';

class ConnectPage extends Component{
  constructor(props){
    super(props);
    
    this.state={
      user: '',
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
    this.props.connectUser(this.state.user);
  }
}

const mapStateToProps = (state) => {
  return {
    user : state.user
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    connectUser : (value) => {dispatch(connectUser(value))},
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (ConnectPage);
