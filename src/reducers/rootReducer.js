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

export function selected(state = startingState.selected, action){
  switch (action.type){
    case "UPDATE_SELECTED":
      return action.selected;
    default:
      return state;
  }
}

export function users(state = startingState.users, action){
  switch (action.type){
    case "ADD_USER":
      return [...state, action.user];
    default:
      return state;
  }
}

export function expenses(state = startingState.expenses, action){
  switch (action.type){
    case "ADD_EXPENSE": 
      return [...state, action.expense];
    default:
      return state;
  }
}


export default function rootReducer(state = {}, action){
  return {
    user: userConnexion(state.user, action)
  }
};
