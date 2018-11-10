import React, { Component } from 'react';

import { connect } from 'react-redux';

import { getAllAddress } from './RequestManager.js';
import { handleCityFetch } from '../actions/actions.js';
import { cityList } from './Utils.js';

class CityFetch extends Component{

  componentDidMount(){
    getAllAddress().then(data => {
      if(data){this.props.handleCityFetch(cityList(data));}
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
    handleCityFetch: (value) => {dispatch(handleCityFetch(value))}
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (CityFetch);
