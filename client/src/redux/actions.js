 import axios from "axios";



 export function getCountries(page) {
     return function(dispatch) {
         axios.get("http://localhost:3001/countries?page="+page)
         .then(response => {
             return dispatch({type: "GET_COUNTRIES", payload: response.data})
         })
     }
 };

 export function searchCountries(name) {
     return function(dispatch) {
         axios.get("http://localhost:3001/countries?name=" + name)
         .then(response => {
             dispatch({type: "GET_COUNTRY_NAME", payload: response.data})
         })
         .catch(e => console.log(e))
     }
 };


 export function getCountryId(id) {
     return function(dispatch) {
         axios.get("http://localhost:3001/countries/"+id)
         .then(response => dispatch({
             type: "GET_COUNTRY_ID", payload: response.data
         }))
     }
 };


 export function createActivity (values) {
     return function(dispatch){
         axios.post("http://localhost:3001/activity", values)
         .then(response => console.log(response))
         .catch(e => console.log(e))
     }
 };


 export function sortCountries(order) {
    return {
        type: "SORT_COUNTRIES",
        payload: order
    }
 }


 