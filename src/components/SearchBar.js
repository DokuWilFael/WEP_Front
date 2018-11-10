import React, { Component } from 'react';

import { connect } from 'react-redux';

import CityForm from './CityForm.js';
import ActForm from './ActForm.js';

class SearchBar extends Component{

  render(){
    return(<div className="SearchBar">
             <div className="SearchLeft">
               <ActForm />
             </div>
             <div className="SearchRight">
               <CityForm />
             </div>
           </div>);
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
) (SearchBar);
