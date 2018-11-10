import React, { Component } from 'react';

import { connect } from 'react-redux';

import ConnectForm from './ConnectForm.js';
import SignForm from './SignForm.js';

import { disconnectUser } from '../actions/actions.js';

//This class handle the switch between the connect/sign menu
//and the Disconnect Menu
class ConnexionManager extends Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render(){
    const connected = this.props.connected;
    return(
      this.manageConnexion(connected)
    );
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.disconnectUser();
  }

  manageConnexion(connected){
    if(!connected){
      //connect/sign menu
      return(<div>
               <ConnectForm /> 
               <SignForm />
             </div>);
    }
    else{
      //disconnect menu
      return(<div>
               {this.props.user}
               <form onSubmit={this.handleSubmit}>
                 <input type='submit' value='Disconnect'/>
               </form>
             </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    connected: state.connected,
    user: state.user
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
