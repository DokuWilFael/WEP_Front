import React, { Component } from 'react';

import { connect } from 'react-redux';

import { getUser, getActivity, getAllActivity } from './RequestManager.js';
import { cityList, actHasAddr } from './Utils.js';
import { handleSelectCity } from '../actions/actions.js';

class UserPlanningSelector extends Component{

  constructor(props){
    super(props);
    this.state = {
      addrs: [],
      acts: [],
      citys: []
    };
    this.handleChange=this.handleChange.bind(this);
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
    const citys=this.state.citys;
    const selected = this.props.selected_city;
    const optionsList = citys.map(c => <option key={c} selected={selected
    ===c}>{c}</option>);
    return(
      <div>
        <h2>What you have planned</h2>
        <h2>Look here by city</h2>
        <select onChange={this.handleChange}>
          <option value="all" selected={selected==="all"}>Anywhere</option>
          {optionsList}
        </select>
      </div>
    );
  }

  handleChange(e){
    e.preventDefault();
    this.props.handleSelectCity(e.target.value);
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
    handleSelectCity: (value) => {dispatch(handleSelectCity(value))},
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (UserPlanningSelector);
