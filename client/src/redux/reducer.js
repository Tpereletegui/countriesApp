
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
        case "SORT_COUNTRIES_CONTINENT":
            return {
                ...state,
                countries: action.payload.filter(x => x.continent === action.continent)
            }

        case "GET_ACTIVITIES":
            return {
                ...state,
                activities: action.payload
            }
        default:
            return state

        }         
}


export default reducer;