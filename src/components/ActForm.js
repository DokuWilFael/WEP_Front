import React, { Component } from 'react';

import { connect } from 'react-redux';

import { handleSelectAct } from '../actions/actions.js';

class ActForm extends Component{

  constructor(props){
    super(props);

    this.handleChange=this.handleChange.bind(this);
  }

  render(){
    const act=this.props.activities;
    const selected = this.props.selected_act;
    const optionsList = act.map(c => <option key={c} selected={selected
    ===c}>{c}</option>);
    return(
      <div>
        <h2>What do you want to do?</h2>
        <select onChange={this.handleChange}>
          <option value="all" selected={selected==="all"}>Anything</option>
          {optionsList}
        </select>
      </div>
    );
  }

  handleChange(e){
    e.preventDefault();
    this.props.handleSelectAct(e.target.value);
  }
  
}

const mapStateToProps = (state) => {
  return {
    activities: state.activities,
    selected_act: state.selected_act
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleSelectAct: (value)=>{dispatch(handleSelectAct(value))}
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (ActForm);
