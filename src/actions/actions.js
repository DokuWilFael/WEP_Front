export const updateSelected = (selection) => {
  return {type : "UPDATE_SELECTED", selected: selection};
}

export const addUser = (newUser) => {
  return {type: "ADD_USER", user: newUser};
}

export const addExpense = (name, title, cost) => {
  return {type: "ADD_EXPENSE", expense: {paidBy:name, title:title, amount:cost}};
}

export const connectUser = (user) => {
  return {type : "CONNECT", user:user};
}
