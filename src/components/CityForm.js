import React, { Component } from 'react';

import { connect } from 'react-redux';

import { handleSelectCity } from '../actions/actions.js';

class CityForm extends Component{

  constructor(props){
    super(props);

    this.handleChange=this.handleChange.bind(this);
  }

  render(){
    const citys=this.props.citys;
    const selected = this.props.selected_city;
    const optionsList = citys.map(c => <option key={c} selected={selected
    ===c}>{c}</option>);
    return(
      <div>
        <h2>Where do you go?</h2>
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
    citys: state.citys,
    selected_city: state.selected_city
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleSelectCity: (value)=>{dispatch(handleSelectCity(value))}
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (CityForm);
