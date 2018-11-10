import React, { Component } from 'react';

import { connect } from 'react-redux';

import AddActivity from './AddActivity.js';
import SearchBar from './SearchBar.js';
import ActTable from './ActTable.js';
import UserPlanningSelector from './UserPlanningSelector.js';
import UserActTable from './UserActTable.js';

//This class manage the display of the body content
//dependent of bodyState (I hope)
class BodyContent extends Component{

  render(){
    const bodyState = this.props.bodyState;
    return(
      this.manageState(bodyState)
    );
  }

  manageState(bodyState){
    
    if(bodyState==="MAIN_HUB"){
      //Our interface here
      return(<div>
               <div className="LeftCol">
                 <AddActivity />
               </div>
               <div className="RightCol">
                 <SearchBar />
                 <ActTable />
               </div>
             </div>);
    }
    else if(bodyState==="USER_WEEK_END"){
      //Some promotionnal material
      return(<div>
               <div className="LeftCol">
                 <UserPlanningSelector />
               </div>
               <div className="RightCol">
                 <UserActTable />
               </div>
             </div>
      );
    }else{
      return(<div></div>);
    }
  }
}

const mapStateToProps = (state) => {
  return {
    bodyState: state.bodyState
  }
}
const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (BodyContent);
