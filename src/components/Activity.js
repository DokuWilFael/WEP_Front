import React, { Component } from 'react';

import { connect } from 'react-redux';

import { addrFromActWithCity } from './Utils.js';
import { getAddressId, userAddAddress } from './RequestManager.js';
import { createAddr } from './Utils.js';

//display an activity
class Activity extends Component{

  constructor(props){
    super(props);
    this.handleClick=this.handleClick.bind(this);
  }

  render(){
    const act = this.props.act;
    return(
        <td onClick={this.handleClick}>
          <p>
            {act.name}
          </p>
          <p>{act.description}</p>
        </td>
    )
  }

  handleClick(e){
    e.preventDefault();
    var addrs = addrFromActWithCity(
      this.props.act,this.props.selected_city);
    addrs.map( a => getAddressId(createAddr(a)).then( data =>{
      if(window.confirm("This will add the activity to your planning")){
        userAddAddress(this.props.userId,data);
      }else{
        //do nothing
      }
    }));
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.userId,
    selected_city: state.selected_city
  }
}
const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (Activity);
