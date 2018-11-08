import React, { Component } from 'react';

import { connect } from 'react-redux';

import ConnectForm from './ConnectForm.js';

import { disconnectUser } from '../actions/actions.js';

class ConnexionManager extends Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render(){
    const user = this.props.user;
    return(
      this.manageConnexion(user)
    );
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.disconnectUser();
  }

  manageConnexion(user){
    if(user===''){
      return(<ConnectForm />);
    }
    else{
      return(<form onSubmit={this.handleSubmit}>
               <input type='submit' value='Disconnect'/>
             </form>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    user : state.user
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    disconnectUser : () => {dispatch(disconnectUser())},
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (ConnexionManager);
