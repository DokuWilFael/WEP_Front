//STARTING DATA
const user = "";
const userId= -1;
const connected = false;
const citys = [];
const activities = [];
const bodyState = ""; //token representing state of main body

const selected_city= 'all';
const selected_act= 'all';

const startingState = {
      user: user,
      userId: userId,
      connected: connected,
      bodyState: bodyState,

      citys: citys,
      selected_city: selected_city,
      selected_act: selected_act,
      activities: activities
};

export function handleActFetch(state=startingState.activities,action){
  switch (action.type){
    case "ACT_FETCH":
      return action.activities;
    default:
      return state;
  }
}
export function handleSelectCity(state=startingState.selected_city,action)
{
  switch (action.type){
    case "CITY_CHANGE":
      return action.selected_city;
    default:
      return state;
  }
}

export function handleSelectAct(state=startingState.selected_act,action)
{
  switch (action.type){
    case "ACT_CHANGE":
      return action.selected_act;
    default:
      return state;
  }
}

export function handleBodyStateChange(state=startingState.bodyState,action){
  switch (action.type){
    case "BODY_STATE_CHANGE":
      return action.bodyState;
    default:
      return state;
  }
}

export function userConnexion(state=startingState.user, action){
  switch (action.type){
    case "CONNECT_USER":
      return action.user;
    case "DISCONNECT":
      return "";
    default:
      return state;
  }
}

export function userIdConnexion(state=startingState.userId, action){
  switch (action.type){
    case "CONNECT_ID":
      return action.userId;
    case "DISCONNECT":
      return -1;
    default:
      return state;
  }
}

export function handleConnected(state=startingState.connected, action){
  switch (action.type){
    case "CONNECT":
      return action.connected;
    case "DISCONNECT":
      return false;
    default:
      return state;
  }
}

export function handleCityFetch(state=startingState.citys,action){
  switch (action.type){
    case "CITY_FETCH":
      return action.citys;
    default:
      return state;
  }
}


export default function rootReducer(state = {}, action){
  return {
    user: userConnexion(state.user, action),
    userId: userIdConnexion(state.userId, action),
    connected: handleConnected(state.connected, action),
    citys: handleCityFetch(state.citys, action),
    bodyState: handleBodyStateChange(state.bodyState, action),
    selected_city: handleSelectCity(state.selected_city, action),
    selected_act: handleSelectAct(state.selected_act, action),
    activities: handleActFetch(state.activities, action)
    
  }
};
