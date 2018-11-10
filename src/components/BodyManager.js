import React, { Component } from 'react';

import { connect } from 'react-redux';

import AddActivity from './AddActivity.js';

//This class manage the display of the body
//depending of the connected state
class BodyManager extends Component{

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
    if(connected){
      //Our interface here
      return(<div><AddActivity /></div>);
    }
    else{
      //Some promotionnal material
      return(<div>
               <p>Easy way to manage your time!</p>
               <p>Create an account and start planning your week-end</p>
               <p>You know where you go? Find stuff to do!</p>
               <p>You know what you want? Find where you can go!</p>
             </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    connected: state.connected
  }
}
const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (BodyManager);
