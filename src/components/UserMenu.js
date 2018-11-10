import React, { Component } from 'react';

import { connect } from 'react-redux';

import { handleBodyStateChange } from '../actions/actions.js';

//This class render the top left button
class UserMenu extends Component{

  constructor(props){
    super(props);
    this.handleClick=this.handleClick(this);
     
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
             {this.manageBodyState(this.props.bodyState)}
             </div>);
    }
  }

  manageBodyState(bodyState){
    if(bodyState==="MAIN_HUB"){
      return(<form onSubmit={this.handleClick}>
               <input type='submit' value='YOUR WEEK-END' />
             </form>);
    }else if(bodyState==="USER_WEEK_END"){
      return(<form onSubmit={this.handleClick}>
               <input type='submit' value='MAIN_HUB' />
             </form>);
    }else{
      return(<div></div>);
    }
  }

  handleClick(e){
    if(this.props.bodyState==="MAIN_HUB"){
      this.props.handleBodyStateChange("USER_WEEK_END");
    }else if(this.props.bodyState==="USER_WEEK_END"){
      this.props.handleBodyStateChange("MAIN_HUB");
    }
  }
}

const mapStateToProps = (state) => {
  return {
    connected: state.connected,
    bodyState: state.bodyState
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleBodyStateChange: (value) =>
 {dispatch(handleBodyStateChange(value))},
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (UserMenu);
