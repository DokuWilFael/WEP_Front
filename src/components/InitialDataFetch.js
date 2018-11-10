import React, { Component } from 'react';

import { connect } from 'react-redux';

import { getAllAddress, getAllActivity } from './RequestManager.js';
import { handleCityFetch, handleActFetch } from '../actions/actions.js';
import { cityList, actList } from './Utils.js';

class InitialDataFetch extends Component{

  componentDidMount(){
    getAllAddress().then(data => {
      if(data){this.props.handleCityFetch(cityList(data));}
    });
    getAllActivity().then(data => {
      if(data){this.props.handleActFetch(actList(data));}
    });
  }

  render(){
    return(<div></div>);
  }
}

const mapStateToProps = (state) => {
  return {
    citys: state.citys
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleCityFetch: (value) => {dispatch(handleCityFetch(value))},
    handleActFetch: (value) => {dispatch(handleActFetch(value))}
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (InitialDataFetch);
