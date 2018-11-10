import React, { Component } from 'react';

import { connect } from 'react-redux';

import { getAllActivity } from './RequestManager';
import Activity from './Activity.js';
import { actIsInCity } from './Utils.js';

class ActTable extends Component{
  constructor(props){
    super(props);
    this.state = {act: []};
    getAllActivity().then(data => {this.setState({act: data});});
  }

  render(){   
    var actList = [];
    if(this.props.selected_act === "all"){
      actList = this.state.act;
    }else{
      actList = this.state.act.filter( a => a.name === this.props.selected_act);
    }
    if(this.props.selected_city === "all"){
      actList=actList;
    }else{
      actList = actList.filter( a =>
       actIsInCity(a,this.props.selected_city));
    }
    const displayList = 
      actList.map(a => <Activity act={a} key={a.name+Math.random().toString()} />);

    const real = [];
    var i
    for(i=0;i<displayList.length;i+=3){
      real.push(<ThreeAct acts={displayList.slice(i,i+3) } key={i} />);
    }
    return(
      <table>
        <tbody>
        {
          real
        }
        </tbody>
      </table>
    ) 
  }
}

class ThreeAct extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const acts = this.props.acts;
    return(
      <tr>
      {acts}
      </tr>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    selected_city: state.selected_city,
    selected_act: state.selected_act
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    //connectUser: (value) => {dispatch(connectUser(value))},
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (ActTable);
