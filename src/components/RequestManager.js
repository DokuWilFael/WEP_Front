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

export function createUser(name, addrs){
  return axios.post(fullUserUrl+"/create",
      {name: name, addrs: addrs}
    )
  .then( res => {console.log(res.data);})
  .catch(error => {console.log(error);})
}

export function updateUser(id, name, addrs){
  return axios.post(fullUserUrl+"/update",
      {params: {id: id}, name: name, addrs: addrs}
    )
  .then( res => {console.log(res.data);})
  .catch(error => {console.log(error);})
}

export function getUser(userId){
  return axios.get(fullUserUrl+"/getUser",{
      params: {id: userId}
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

//ACTIVITY API
const fullActivityUrl = baseUrl+activityUrl;

export function activityHello(){
  return axios.get(fullActivityUrl+"/hello")
    .then(res => {return res.data;})
    .catch(error => {console.log(error);})
}
