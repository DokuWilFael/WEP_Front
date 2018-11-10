//BAD dev component
//need to be deleted when dev is done

import React, { Component } from 'react';

import { connect } from 'react-redux';

import { userHello, createUser, updateUser,
  getUser, getAllUser, deleteUser,
  addressHello, createAddress, updateAddress,
  deleteAddress, getAddress, getAllAddress,
  activityHello, createActivity, updateActivity,
  deleteActivity, getActivity, getAllActivity
} from './RequestManager.js';

import { User, Address, Activity } from './Utils.js';


class TestingApi extends Component{
  constructor(props){
    super(props);
    var a = new User("THE_ALL_POWERFULL_ADMIN",[]);
    createUser(a).then(data=>{console.log(data)});
    
    
  }

  render(){
    return(<p>bla</p>);
  }

}





const mapStateToProps = (state) => {
  return {

  }
}
const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (TestingApi);
