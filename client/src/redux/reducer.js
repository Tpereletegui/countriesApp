
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
            let sorted=[];
            if(action.order==="1" ||action.order==="2"|| action.order==="3"||action.order==="4" ||action.order==="5" ){
                sorted=action.payload.filter(x => x.difficulty === action.order)
            }else{
                sorted=action.payload.filter( x=> x.season === action.order)
            }
                return {
                    ...state,
                    activities: sorted
                }    
        /* case "CREATE ACTIVITY": 
                 return {
                    ...state,
                     activities: activities.push(action.payload)
            } */
        default:
            return state

        }         
}


export default reducer;