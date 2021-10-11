 import axios from "axios";

export function getCountriesOrder(order, page) {
    return function(dispatch) {
        axios.get("http://localhost:3001/countries/"+ order + "?page=" + page)
        .then(response => {
            return dispatch({type: "GET_COUNTRIES_ORDER", payload: response.data})
        })
    }
}


export function getAllCountries(page) {
    return function(dispatch) {
        axios.get("http://localhost:3001/countries/all")
        .then(response => {
            return dispatch({type: "GET_ALL_COUNTRIES", payload: response.data})
        })
    }
};

export function sortCountriesContinent(continent){
    return function(dispatch) {
        axios.get("http://localhost:3001/countries/all")
        .then(response => {
            return dispatch({type: "SORT_COUNTRIES_CONTINENT", payload: response.data, continent: continent})
        })
    }
}

export function sortCountriesActivity(activity){
    return function(dispatch) {
        axios.get("http://localhost:3001/countries/all")
        .then(response => {
            return dispatch({type: "SORT_COUNTRIES_ACTIVITY", payload: response.data, activity: activity})
        })
    }
}

 export function getCountries(page) {
     return function(dispatch) {
         axios.get("http://localhost:3001/countries?page="+ page)
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
         axios.get("http://localhost:3001/country/"+id)
         .then(response => dispatch({
             type: "GET_COUNTRY_ID", payload: response.data
         }))
     }
 };



 export function createActivity (values) {
    return function(dispatch){
        axios.post("http://localhost:3001/activity", values)
        .then(response =>dispatch({
            type: "CREATE_ACTIVITY", payload: response.data
        }))
        .catch(e => console.log(e))
    }
}

export function getActivities (order ) {
    return function (dispatch) {
        axios.get("http://localhost:3001/activities?order=" + order)
        .then(response => {
            console.log(response)
             dispatch({
            type: "GET_ACTIVITIES", payload: response.data
        })})
    }
} 


export function removeCountries() {
    return {
        type: "REMOVE_COUNTRIES"
    }
}

export function removeCountry() {
    return {
        type: "REMOVE_COUNTRY"
    }
}




        
    
 


