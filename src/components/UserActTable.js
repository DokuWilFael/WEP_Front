import React, { Component } from 'react';

import { connect } from 'react-redux';

import { getUser, getActivity, getAllActivity } from './RequestManager.js';
import { cityList, actHasAddr } from './Utils.js';
import Activity from './Activity.js';
import { Address } from './Address.js';

class UserActTable extends Component{

  constructor(props){
    super(props);
    this.state = {
      addrs: [],
      acts: [],
      citys: []
    };
    
  }

  componentDidMount(){
    getUser(this.props.userId).then(data=>{
      this.setState({addrs: data.addrs});
      this.setState({citys: cityList(data.addrs)});
      getAllActivity().then( as => { 
        var i;
        var asFilter = [];
        for(i=0;i<data.addrs.length;i++){
          asFilter = asFilter.concat( as.filter( a => actHasAddr(a,data.addrs[i])));
        }
        this.setState({acts: asFilter});
      });
    });
  }

  render(){
    var displayList = [];
    var i;
    var addrs = this.state.addrs;
    var acts = this.state.acts;
    for(i=0;i<addrs.length;i++){
      var filterActs = acts.filter( a => actHasAddr(a,addrs[i]));
      displayList = displayList.concat(filterActs.map( a =>
        <Row act={a} addr={addrs[i]} key={a.name+addrs[i].street}/>
      ));
    }
    
    return(
      <table>
        <thead>
        <tr><th><p>Activity</p></th><th><p>Address</p></th></tr>
        </thead>
        <tbody>
          {displayList}
        </tbody>
      </table>
      
    );
  }
}

class Row extends Component{

  render(){
    return(
      <tr>
        <Activity act={this.props.act} />
        <Address address={this.props.addr} />
      </tr>
    );
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
) (UserActTable);
