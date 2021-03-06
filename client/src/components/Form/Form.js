import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createActivity, getAllCountries, removeCountries} from "../../redux/actions";
import {useHistory} from "react-router-dom";
import Nav from "../Nav/Nav";
import { Button } from "@mui/material";
import style from "./form.module.css";


function Form () {
    const countries= useSelector(state => state.countries)
    const dispatch= useDispatch();
   const history = useHistory();
    useEffect(() => {
         dispatch(getAllCountries())
    }, [dispatch]);

    console.log("countries", countries)
    const [error, setError] =useState("incomplete")
    const [values, setValues] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        image: "",
        countries: [] 
    })

    function validateSeason(value) {
        if(value!==""){
            setError("")
        }else{
            setError("incomplete")
        }
        setValues({
            ...values,
            season: value
        })
    }

    function validateDifficulty(value) {
        if(value===""){
            setError("incomplete")
            
        }
        setValues({
            ...values,
            difficulty: value
        })
    }

    function validateName(value) {
        if(value===""){
            setError("incomplete")
            
        }
        setValues({
            ...values,
            name: value
        })
    }

    function validateDuration(value) {
        if(!/^\d+$/.test(value)){
            setError("duration")
        }else{
            setError("incomplete")
        }
            
        
        setValues({
            ...values,
            duration: value
        })
    }

    const handleChange = (e) => {
      
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSelect = (e) => {
       
        if(values.countries.includes(e.target.value)){
            setValues({
                ...values,
                countries: values.countries.filter(ct=>ct !== e.target.value)
            })
        } else {   
            setValues({
                ...values,
                countries: [...values.countries, e.target.value]
            })
        }
    }
    const onClick2= e => {
       
        setValues({
            ...values,
            countries: []

        })
    } 

    

    


    const onSubmit = (e) => {
        
        dispatch(createActivity(values))
        setValues({
            name: "",
            difficulty:"",
            duration:"",
            season: "",
            image:"",
            countries: []
        })
        alert("Activity Created")
        /* setError("incomplete") */
    }

    
    let order = countries.sort((a, b)=> a.name.localeCompare(b.name))

    return (
        <div className={style.form_container}>
        <Nav />
        <h3 className={style.form_title}>Create Activity</h3>
        <form onSubmit={onSubmit} className={style.form_form}>
             <label htmlFor="" className={style.form_label}>Name: </label>
            <input name="name" value={values.name} onChange={(e)=> validateName(e.target.value)} className={style.form_name} />
            <label htmlFor="" className={style.form_label}>Duration (days): </label>
            <input  name="duration" value={values.duration} onChange={(e)=>validateDuration(e.target.value)} className={error==="duration"? style.form_duration_error: style.form_duration }/>
            {error==="duration" ? <span className={style.form_span}>it should be a Number</span> : null}
            <label className={style.form_label} >Difficulty</label>
            <select name="difficulty" onChange={(e)=>validateDifficulty(e.target.value)} className={style.form_difficulty}>
                <option value="" className= {style.form_option} >-</option>
               <option value="1" className={style.form_option}>1</option> 
               <option value="2" className={style.form_option}>2</option> 
               <option value="3" className={style.form_option}>3</option> 
               <option value="4" className={style.form_option}>4</option> 
               <option value="5" className={style.form_option}>5</option> 
            </select>

            <label className={style.form_label}>Season</label>
            <select name="season" onChange={(e)=>validateSeason(e.target.value)} className={style.form_season}>
               <option value="" className={style.form_option}>-</option> 
               <option value="Summer" className={style.form_option}>Summer</option> 
               <option value="Spring" className={style.form_option}>Spring</option> 
               <option value="Autumn" className={style.form_option}>Autumn</option> 
               <option value="Winter" className={style.form_option}>Winter</option> 
               
            </select>
            <label className={style.form_label_countries}>Countries</label>
            
            <select onChange={handleSelect} name="countries" multiple className={style.form_countries}> 
                {
                    
                    order.map((e,i)=><option key={e.id} value={e.id} className={style.form_option_countries}>{e.name}</option>)
                }
            </select>
            <div>
            {
                values.countries.map(e=>
                    {
                        let label= countries.find(x => e===x.id);
                        
                       return(
                       <p className={style.form_country}> -{label.name}</p>
                       )
                       
                       
                    })
            }
            </div>
            
            <Button size="small" onClick={onClick2} style={{backgroundColor: '#222831', color: '#EEEEEE', marginLeft: '158px', marginBottom: '15px', marginTop:'15px', height:'25px', width:'20px'}}>Reset</Button>
            <Button type="submit" disabled={error.length>1}  style={{backgroundColor: '#00ADB5', color: '#000000', marginLeft: '150px',marginTop:'15px' }}>Create</Button>
        
            
            
        </form>
                 
        </div>
    )
}

export default Form;