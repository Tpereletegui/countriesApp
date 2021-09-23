import React from "react";
import { connect} from "react-redux";
import {getCountryId } from "../../redux/actions";
import Nav from "../Nav/Nav";


class Details extends React.Component{
    componentDidMount() { 
        console.log(this.props)
        const locate= this.props.location["pathname"];
        const split=locate.split("/");
        const result= split[2]
        const id=result.toString()
        console.log(id)
        this.props.getCountryId(id)
    }

    render() {
        return (
            
            <div>
                    <Nav/>
                    {console.log(this.props.countryDetail)}
                    <img src={this.props.countryDetail.image} alt={this.props.countryDetail.name}/>
                    <h1>{this.props.countryDetail.name}</h1>
                    <p>Capital: {this.props.countryDetail.capital}</p>
                    <p>Continent: {this.props.countryDetail.continent}</p>
                    <p>Subregion: {this.props.countryDetail.subregion}</p>
                    <p>Area: {this.props.countryDetail.area}</p>
                    <p>Population: {this.props.countryDetail.population}</p>
                    
                        <div>

                        <h3>Activities</h3>
                         {this.props.countryDetail.activities?  this.props.countryDetail.activities.map(x => 
                           
                           <div>
                                 <h4>{x.name.toUpperCase()}</h4>
                                 <p>Duration: {x.duration} Days</p>
                                 <p>Difficulty: {x.difficulty}</p>
                                 <p>Season: {x.season}</p>
                              </div>
                         ):   <p>Este pais no tiene actividades</p>}
                        
                         </div>
                    
                    
                </div>
                
        )
    }
}

     /* function Details({id}) {
       const dispatch = useDispatch();
       const this.props.countryDetail= useSelector( state =>{
        return state.this.props.countryDetailDetail});


       useEffect(()=>{
        return dispatch(getthis.props.countryDetailId(id)) 
       },[dispatch, id]);
       
       

       return (
           <div>
                {
                <div>
                    
                    <img src={this.props.countryDetail.image} alt={this.props.countryDetail.name}/>
                    <h3>{this.props.countryDetail.name}</h3>
                    <p>Capital: {this.props.countryDetail.capital}</p>
                    <p>Continent: {this.props.countryDetail.continent}</p>
                    <p>Subregion: {this.props.countryDetail.subregion}</p>
                    <p>Area: {this.props.countryDetail.area}</p>
                    <p>Population: {this.props.countryDetail.population}</p>
                    </div>
                  }
               
                    <p>Activities</p>
                        
                    {/* {this.props.countryDetail.activities.map(x => {
                            <div>
                                <p>Name: {x.name}</p>
                                <p>Difficulty: {x.difficulty}</p>
                                <p>Duration: {x.duration}</p>
                                <p>Season: {x.season}</p>
                            </div>
                        })} 
                     
                 </div>
        )
    }


 */ 

    function mapStateToProps(state) {
        return {
            countryDetail: state.countryDetail
        }
    }

    function mapDispatchToProps (dispatch) {
        return {
            getCountryId: (id) => dispatch(getCountryId(id))
        }
    }


  export default connect(mapStateToProps, mapDispatchToProps)(Details)  