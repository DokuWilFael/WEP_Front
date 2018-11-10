export const connectUser = (user) => {
  return {type: "CONNECT_USER", user:user};
}

export const connectUserId = (userId) => {
  return {type: "CONNECT_ID", userId:userId};
}

export const disconnectUser = () => {
  return {type: "DISCONNECT"};
}

export const handleConnected = (connected) => {
  return {type: "CONNECT", connected:connected};
}

export const handleCityFetch = (citys) => {
  return {type: "CITY_FETCH", citys:citys};
}
