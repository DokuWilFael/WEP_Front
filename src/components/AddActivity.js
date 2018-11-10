import React, { Component } from 'react';

import { connect } from 'react-redux';

import { createActivity, createAddress, getAllAddress, getAllActivity,
  getActivityId, getAddressId, activityAddAddress}
  from './RequestManager.js';
import { Activity, Address, createAct, createAddr }
  from './Utils.js';

class AddActivity extends Component{

  constructor(props){
    super(props);
    
    this.state={
      activity: new Activity("","",[]),
      address: new Address("","","","","","","")
    };

    

    this.actNChange = this.actNChange.bind(this);
    this.actDescChange = this.actDescChange.bind(this);

    this.addrTChange = this.addrTChange.bind(this);
    this.addrCityChange = this.addrCityChange.bind(this);
    this.addrCounChange = this.addrCounChange.bind(this);
    this.addrPNChange = this.addrPNChange.bind(this);
    this.addrStreeChange = this.addrStreeChange.bind(this);
    this.addrSNChange = this.addrSNChange.bind(this);
    this.addrCompChange = this.addrCompChange.bind(this);

    this.handleSubmit=this.handleSubmit.bind(this);

  }

  actNChange(e){
    var act = this.state.activity;
    act.name = e.target.value;
    this.setState({activity: act});
  }
  actDescChange(e){
    var act = this.state.activity;
    act.description = e.target.value;
    this.setState({activity: act});
  }

  addrTChange(e){
    var addr = this.state.address;
    addr.type = e.target.value;
    this.setState({address: addr});
  }
  addrCityChange(e){
    var addr = this.state.address;
    addr.city = e.target.value;
    this.setState({address: addr});
  }
  addrCounChange(e){
    var addr = this.state.address;
    addr.country = e.target.value;
    this.setState({address: addr});
  }
  addrPNChange(e){
    var addr = this.state.address;
    addr.cityNumber = e.target.value;
    this.setState({address: addr});
  }
  addrStreeChange(e){
    var addr = this.state.address;
    addr.street = e.target.value;
    this.setState({address: addr});
  }
  addrSNChange(e){
    var addr = this.state.address;
    addr.streetNumber = e.target.value;
    this.setState({address: addr});
  }
  addrCompChange(e){
    var addr = this.state.address;
    addr.complement = e.target.value;
    this.setState({address: addr});
  }



  render(){
    return(
      <div className="AddActivityForm">
        <h2>Know a cool activity you want to share ?</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="actN">Activity Title</label>
          <input id="actN" type="text" placeholder=""
          onChange={this.actNChange} />

          <label htmlFor="actDesc">Description</label>
          <input id="actDesc" type="text" placeholder=""
          onChange={this.actDescChange} />

          <label> Address </label>
          <label htmlFor="addrT"> Type </label>
          <input id="addrT" type="text" placeholder=""
          onChange={this.addrTChange} />

          <label htmlFor="addrCity"> City </label>
          <input id="addrCity" type="text" placeholder=""
          onChange={this.addrCityChange} />

          <label htmlFor="addrCoun"> Country </label>
          <input id="addrCoun" type="text" placeholder=""
          onChange={this.addrCounChange} />

          <label htmlFor="addrPN"> Postal Code </label>
          <input id="addrPN" type="number" placeholder=""
          onChange={this.addrPNChange} />

          <label htmlFor="addrStree"> Street </label>
          <input id="addrStree" type="text" placeholder=""
          onChange={this.addrStreeChange} />

          <label htmlFor="addrSN"> Street Number </label>
          <input id="addrSN" type="number" placeholder=""
          onChange={this.addrSNChange} />

          <label htmlFor="addrComp"> Complement </label>
          <input id="addrComp" type="text" placeholder=""
          onChange={this.addrCompChange} />

          <input type="submit" value="Share" />
        </form>
      </div>
    );
  }

  handleSubmit(e){
    e.preventDefault();
    this.save().then( () => {
      this.linkActAddr(this.state.activity,this.state.address);
    });
  }

  save(){
    return this.saveActivity(this.state.activity).then( data =>{
      this.saveAddresse(this.state.address)
    });
  }
  
  //not saving duplicates and "null"
  saveActivity(activity){
    return getAllActivity().then(data =>{
      var actList = data.map(a => { 
        return JSON.stringify(createAct(a));});
      if(!actList.includes(JSON.stringify(activity))){
        if(JSON.stringify(activity)
        !==JSON.stringify(new Activity("","",[]))){
          return createActivity(activity);
        }
      }
    });
  }

  saveAddresse(address){
    return getAllAddress().then(data =>{
      var addrList = data.map(a => {
        return JSON.stringify(createAddr(a));});
      if(!addrList.includes(JSON.stringify(address))){
        if(JSON.stringify(address)
        !==JSON.stringify(new Address("","","","","","",""))){
          return createAddress(address);
        }
      }
    });
  }

  linkActAddr(act,addr){
    return getActivityId(act).then(idAct =>{
      getAddressId(addr).then(idAddr =>{
        activityAddAddress(idAct,idAddr);
      })
    });
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
) (AddActivity);
