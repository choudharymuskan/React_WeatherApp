import React,{useState,useEffect} from 'react'
import './css/style.css'


const Temp = () => {
    const [city,setCity] =useState();
    const [search,setSearch]= useState("Jaipur");

useEffect(() => {
    const fetchApi = async () =>{
        
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=0c0631abe60c3946b9bebdfdf9f8e388`)   
         const resJson = await res.json();
        setCity(resJson.main);  
}
fetchApi();
},[search])

return (
    <>
 
    <div className="box">
        <div classname="input">
            <input type="search" 
            placeholder="Enter Place"
             className="inputField" 
            onChange={(event) => { setSearch(event.target.value) }}
            />
        </div>
            {!city ? (<p className="info">No Data found</p>
            ):
            (<div>
                <div className="info">
        <h2 className="location">
        <i className  ="fa fa-street-view" ></i>{search}
        </h2>
        <h1 className="temp"> 
        {city.temp}°C
           
</h1>
        
        <p className="tempmin_max"> 
           Min : {city.temp_min} °C | Min : {city.temp_max} °C
        </p>
    </div>
    <div className="wave-one"></div>
    </div>
            )}
        
    
</div>
    </>

)
}

export default Temp;