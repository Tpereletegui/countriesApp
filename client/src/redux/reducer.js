
const initialState={
    countries: [],
    activities: [],
    countryDetail: {}
}


function reducer(state= initialState, action){
    switch(action.type){

        case "GET_COUNTRIES":
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
                    countries: action.payload
                }

        case "SORT_COUNTRIES":

        let sorted= state.countries.sort(function(a,b ){
            if(action.payload==="asc") return a.name.localeCompare(b.name);
            if(action.payload==="desc") return b.name.localeCompare(a.name);
            if(action.payload==="large") return a.population - b.population;
            if(action.payload==="small") return b.population - a.population;
            if(action.payload==="default") return state.countries
        })
        return {
            ...state,
            countries: sorted
        }
        default:
            return state

        }         
}


export default reducer;