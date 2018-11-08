export const connectUser = (user) => {
  return {type : "CONNECT", user:user};
}

export const disconnectUser = () => {
  return {type : "DISCONNECT"};
}
