import React, { Component } from 'react';

import { connect } from 'react-redux';

import { getAllAddress } from './RequestManager.js';
import { Address } from './Address.js';

class AddressesTable extends Component{

  constructor(props){
    super(props);
    this.state = {addresses: []};
    getAllAddress().then(data => {this.setState({addresses: data});});
  }

  componentWillMount(){
    
  }

  render(){
    
    const displayList = 
      this.state.addresses.map(a => <Address address={a} key={a.type} />);
    return(
      <table><tbody>{displayList}</tbody></table>
    ) 
  }
}

const mapStateToProps = (state) => {
  return {
    
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
) (AddressesTable);
