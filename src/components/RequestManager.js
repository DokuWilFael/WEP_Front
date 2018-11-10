import axios from 'axios';

import {ApiConfig} from "../config.js";

const baseUrl = "http://"+ApiConfig.server+":"+ApiConfig.port;
console.log(baseUrl);

const userUrl = "/user";
const activityUrl = "/activity";
const addressUrl = "/address";

export function get(url){
  return axios.get(url)
    .then(res => {
      return res.data;
    })
    .catch(error => {console.log(error);})
}

//USER API
const fullUserUrl = baseUrl+userUrl;

export function userHello(){
  return axios.get(fullUserUrl+"/hello")
    .then(res => {return res.data;})
    .catch(error => {console.log(error);})
}

export function createUser(user){
  return axios.post(fullUserUrl+"/create",
      user
    )
  .then( res => {console.log(res.data);})
  .catch(error => {console.log(error);})
}

//this uses a post request and I cannot find how to
//use the same syntax as a delete or get
//to transmit the http parameters
//So I used a ugly hack and add them in the URL
//Please note: this hack will be used on ALL the POST request
export function updateUser(id, user){
  return axios.post(fullUserUrl+"/update?id="+id,
    user
    )
  .then( res => {console.log(res.data);})
  .catch(error => {console.log(error);})
}

export function deleteUser(id){
  return axios.delete(fullUserUrl+"/delete",{
    params: {id: id}
    })
  .then()
  .catch(error => {console.log(error);})
}

export function getUser(id){
  return axios.get(fullUserUrl+"/getUser",{
      params: {id: id}
    })
  .then( res => {return res.data;})
  .catch(error => {console.log(error);})
}

export function getAllUser(){
  return axios.get(fullUserUrl+"/getAllUser")
    .then( res => {return res.data;})
    .catch(error => {console.log(error);})
}

//ADDRESS API
const fullAddressUrl = baseUrl+addressUrl;

export function addressHello(){
  return axios.get(fullAddressUrl+"/hello")
    .then(res => {return res.data;})
    .catch(error => {console.log(error);})
}

export function createAddress(addrs){
  return axios.post(fullAddressUrl+"/create",
      addrs
    )
  .then( res => {console.log(res.data);})
  .catch(error => {console.log(error);})
}

export function updateAddress(id, addrs){
  return axios.post(fullAddressUrl+"/update?id="+id,
    addrs
    )
  .then( res => {console.log(res.data);})
  .catch(error => {console.log(error);})
}

export function deleteAddress(id){
  return axios.delete(fullAddressUrl+"/delete",{
    params: {id: id}
    })
  .then()
  .catch(error => {console.log(error);})
}

export function getAddress(id){
  return axios.get(fullAddressUrl+"/getAddress",{
      params: {id: id}
    })
  .then( res => {return res.data;})
  .catch(error => {console.log(error);})
}

export function getAllAddress(){
  return axios.get(fullAddressUrl+"/getAllAddress")
    .then( res => {return res.data;})
    .catch(error => {console.log(error);})
}


//ACTIVITY API
const fullActivityUrl = baseUrl+activityUrl;

export function activityHello(){
  return axios.get(fullActivityUrl+"/hello")
    .then(res => {return res.data;})
    .catch(error => {console.log(error);})
}

export function createActivity(activity){
  return axios.post(fullActivityUrl+"/create",
      activity
    )
  .then( res => {console.log(res.data);})
  .catch(error => {console.log(error);})
}

export function updateActivity(id, activity){
  return axios.post(fullActivityUrl+"/update?id="+id,
    activity
    )
  .then( res => {console.log(res.data);})
  .catch(error => {console.log(error);})
}

export function deleteActivity(id){
  return axios.delete(fullActivityUrl+"/delete",{
    params: {id: id}
    })
  .then()
  .catch(error => {console.log(error);})
}

export function getActivity(id){
  return axios.get(fullActivityUrl+"/getActivity",{
      params: {id: id}
    })
  .then( res => {return res.data;})
  .catch(error => {console.log(error);})
}

export function getAllActivity(){
  return axios.get(fullActivityUrl+"/getAllActivity")
    .then( res => {return res.data;})
    .catch(error => {console.log(error);})
}
