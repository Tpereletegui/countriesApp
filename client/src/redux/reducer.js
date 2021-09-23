
const initialState={
    countries: [],
    activities: [],
    countryDetail: {}
}


function reducer(state= initialState, action){
    switch(action.type){
        case "GET_COUNTRIES_ORDER":
            return {
                ...state,
                countries: action.payload
            }

        case "GET_COUNTRIES":
            return {
                ...state,
                countries: action.payload
            }
        case "GET_ALL_COUNTRIES":
            return {
                ...state,
                countries: action.payload
            }    

        case "GET_COUNTRY_NAME":
                return {
                    ...state,
                    countries: action.payload
                }    
       case "GET_COUNTRY_ID":
                return {
                    ...state,
                    countryDetail: action.payload
                }

        /* case "SORT_COUNTRIES":

        let sorted= state.countries.slice().sort(function(a,b ){
            if(action.order==="asc") return a.name.localeCompare(b.name);
            if(action.order==="desc") return b.name.localeCompare(a.name);
            if(action.order==="large") return a.population - b.population;
            if(action.order==="small") return b.population - a.population;
            if(action.order==="all") return state.countries
        })
        return {
            ...state,
            countries: sorted
        } */
        default:
            return state

        }         
}


export default reducer;