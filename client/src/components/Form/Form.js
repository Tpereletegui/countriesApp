import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createActivity, getAllCountries} from "../../redux/actions";
import Nav from "../Nav/Nav";


function Form () {
    const countries= useSelector(state => state.countries)
    const dispatch= useDispatch();

    useEffect(() => {
       return dispatch(getAllCountries())
    }, [dispatch]);

    console.log("countries", countries)

    const [values, setValues] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: [] 
    })

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
        e.preventDefault();
        setValues({
            ...values,
            countries: values.countries.filter(ct => ct!== e.target.value)
        })
    } 

    


    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(createActivity(values))
        setValues({
            name: "",
            difficulty:"",
            duration:"",
            season: "",
            countries: []

        })
    }

    
    let order = countries.sort((a, b)=> a.name.localeCompare(b.name))

    return (
        <div>
        <Nav />
        <form onSubmit={onSubmit}>
             <label htmlFor="">Name: </label>
            <input name="name" value={values.name} onChange={handleChange}/>
            {/* <label htmlFor="">Difficulty: </label>
            <input name="difficulty" value={values.difficulty} onChange={handleChange}/> */}
            <label htmlFor="">Duration: </label>
            <input name="duration" value={values.duration} onChange={handleChange}/>
            {/* <label htmlFor="">Season: </label>
            <input name="season" value={values.season} onChange={handleChange}/>  */}
            <label>Difficulty</label>
            <select name="difficulty" onChange={handleChange}>
               <option value="1">1</option> 
               <option value="2">2</option> 
               <option value="3">3</option> 
               <option value="4">4</option> 
               <option value="5">5</option> 
            </select>

            <label>Season</label>
            <select name="season" onChange={handleChange}>
               <option value="-">-</option> 
               <option value="summer">Summer</option> 
               <option value="spring">Spring</option> 
               <option value="autumn">Autumn</option> 
               <option value="winter">Winter</option> 
               
            </select>
            
            <select onChange={handleSelect} name="countries" multiple>
                {
                    
                    order.map((e,i)=><option key={e.id} value={e.id}>{e.name}</option>)
                }
            </select>
            <div>
            {
                values.countries.map(e=>
                    {
                        let label= countries.find(x => e===x.id);
                        
                       return(
                       <p>-{label.name}</p>
                       )
                       
                       
                    })
            }
            </div>
            
            <button type="submit">Send</button>
        </form>
        </div>
    )
}

export default Form;