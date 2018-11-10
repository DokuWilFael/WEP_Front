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

export const handleActFetch = (activities) => {
  return {type: "ACT_FETCH", activities:activities};
}

export const handleBodyStateChange = (bodyState) => {
  return {type: "BODY_STATE_CHANGE", bodyState:bodyState};
}

export const handleSelectCity = (selected_city) => {
  return {type: "CITY_CHANGE", selected_city:selected_city};
}

export const handleSelectAct = (selected_act) => {
  return {type: "ACT_CHANGE", selected_act:selected_act};
}
