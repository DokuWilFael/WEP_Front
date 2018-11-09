//STARTING DATA
const user = "";
const userId= -1; 
const users= [];

const startingState = {
      user: user,
      userId: userId,
      users: users,
    };

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


export default function rootReducer(state = {}, action){
  return {
    user: userConnexion(state.user, action),
    userId: userIdConnexion(state.userId, action)
  }
};
