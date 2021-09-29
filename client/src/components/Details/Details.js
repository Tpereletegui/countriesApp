import React from "react";
import { connect} from "react-redux";
import {getCountryId } from "../../redux/actions";
import Nav from "../Nav/Nav";
import "./details.css";


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
            <div className="details_container">
                    <Nav/>
                    <div className="details_card">
                        {console.log(this.props.countryDetail)}
                        <img src={this.props.countryDetail.image} alt={this.props.countryDetail.name} className="details_card_image"/>
                        <h1 className="details_card_name">{this.props.countryDetail.name}</h1>
                        <p className="details_card_continent">{this.props.countryDetail.continent}</p>
                        <p><b>Capital:</b> {this.props.countryDetail.capital}</p>
                        <p><b>Subregion:</b> {this.props.countryDetail.subregion}</p>
                    <div className="details_card_names">
                        <p><b>Area:</b> </p>
                        <p><b>Population:</b> </p>
                        </div>
                        <div className="details_card_numbers">
                        <p>{this.props.countryDetail.area}</p>
                        <p>{this.props.countryDetail.population}</p>
                    </div>
                    </div>
                        <h3 className="details_activities_title">Activities</h3>

                        <div className="details_activities">
                         {this.props.countryDetail.activities?  this.props.countryDetail.activities.map(x => 
                           
                           <div className="details_activities_card">
                                 <h4 className="details_activities_card_name" >{x.name.toUpperCase()}</h4>
                                 <p className="details_activities_card_duration"> <b>Duration:</b> {x.duration} Days </p>
                                 <p className="details_activities_card_difficulty"><b>Difficulty:</b> {x.difficulty} </p>
                                 <p className="details_activities_card_season"><b>Season:</b> {x.season}</p>
                                 
                              </div>
                         ):   <p>Este pais no tiene actividades</p>}
                        
                         </div>
                    
                    
                </div>
                
        )
    }
}

    

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