import React, { Component } from 'react';

import { connect } from 'react-redux';

//This class render the top left button
class UserMenu extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      this.manageConnexion(this.props.connected)
    );
  }

  manageConnexion(connected){
    if(!connected){
      //nothing in the corner when disconnected
      return(<div></div>);
    }else{
      //our corner menu
      return(<div className="TopCorner">
             {this.manageGeneral(this.props.general)}
             </div>);
    }
  }

  manageGeneral(general){
    if(general){
      return(<p>GENERAL</p>);
    }else{
      return(<p>YOUR WEEK-ENDS</p>);
    }
  }
}

const mapStateToProps = (state) => {
  return {
    connected: state.connected,
    general: state.general
  }
}
const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (UserMenu);
