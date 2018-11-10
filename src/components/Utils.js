//Simple placeholders for data
export class User{
  constructor(name,addrs){
    this.name=name;
    this.addrs=addrs;
  }
}

export function createUs(user){
  return new User(user.name,[]);
}

export class Address{
  constructor(type,country,city,cityNumber,street,streetNumber,complement){
    this.type=type;
    this.country=country;
    this.city=city;
    this.cityNumber=cityNumber.toString();
    this.street=street;
    this.streetNumber=streetNumber.toString();
    this.complement=complement;
  }
}

export function createAddr(addr){
    return new Address(addr.type,addr.country,addr.city,addr.cityNumber,
    addr.street,addr.streetNumber,addr.complement);
  }

export class Activity{
  constructor(name, description, addrs){
    this.name=name;
    this.description=description;
    this.addrs=addrs;
  }
}

//clone without address
export function createAct(activity){
    return new Activity(activity.name,activity.description,
               []);
  }

//bad, hardcoded super user because naive programming is easy
export const adminName = "THE_ALL_POWERFULL_ADMIN";

//find a user by name in a list of user
//return id or -1 if not found
export function findUser(userName,userList){
  var i;
  for(i=0;i<userList.length;i++){
    if(userList[i].name===userName){return userList[i].id;}
  }
  return -1;
}

//generate a list of city from addresses
export function cityList(addresses){
  var i;
  var cityL = [];
  for(i=0;i<addresses.length;i++){
    var city = addresses[i].city;
    if(!cityL.includes(city)){
      cityL.push(city);
    }
  }
  return cityL;
}

//generate a list of act name from act
export function actList(acts){
  var i;
  var actL = [];
  for(i=0;i<acts.length;i++){
    var act = acts[i].name;
    if(!actL.includes(act)){
      actL.push(act);
    }
  }
  return actL;
}

export function actIsInCity(act,city){
  var addrL = act.addrs.filter( a => a.city === city);
  return addrL.length >0;
}

export function addrFromActWithCity(act,city){
  if(city === "all"){return act.addrs;}
  return act.addrs.filter( a => a.city === city);
}

export function actHasAddr(act,addr){
  var addrL = act.addrs.filter( a => a.id === addr.id);
  return addrL.length >0;
}
