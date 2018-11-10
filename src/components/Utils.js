//Simple placeholders for data
export class User{
  constructor(name,addrs){
    this.name=name;
    this.addrs=addrs;
  }
}

export class Address{
  constructor(type,country,city,cityNumber,street,streetNumber,complement){
    this.type=type;
    this.country=country;
    this.city=city;
    this.cityNumber=cityNumber;
    this.street=street;
    this.streetNumber=streetNumber;
    this.complement=complement;
  }
}

export class Activity{
  constructor(name, description, addrs){
    this.name=name;
    this.description=description;
    this.addrs=addrs;
  }
}

//bad, hardcoded super user because naive programming is easy
export const adminname = "THE_ALL_POWERFULL_ADMIN";

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
