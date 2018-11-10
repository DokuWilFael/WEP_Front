//STARTING DATA
const user = "";
const userId= -1;
const connected = false;
const citys = [];
const bodyState = ""; //token representing state of main body

const startingState = {
      user: user,
      userId: userId,
      connected: connected,
      bodyState: bodyState,

      citys: citys
};

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
    bodyState: handleBodyStateChange(state.bodyState, action)
    
  }
};
