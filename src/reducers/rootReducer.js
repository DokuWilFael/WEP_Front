//STARTING DATA
const user = ""; 

const startingState = {
      user: user,
    };

export function userConnexion(state=startingState.user, action){
  switch (action.type){
    case "CONNECT":
      return action.user;
    case "DISCONNECT":
      return "";
    default:
      return state;
  }
}

export default function rootReducer(state = {}, action){
  return {
    user: userConnexion(state.user, action)
  }
};
