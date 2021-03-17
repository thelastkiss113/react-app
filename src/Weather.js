import React, { useState } from "react";
import axios from "axios";
import "./Weather.css"

export default function Weather() { 
    const [ready, setReady] = useState(false);
    const [temperature, setTemperature] = useState(null);
    function handleResponse(response) {
        console.log(response.data);
        setTemperature(response.data.main.temp);
        setReady(true);
    }

    if (ready) { 
       
    return ( 
    <div className="Weather">
        <form>
            <input type="search" placeholder="Enter a city..."
            classname="form-control"/> <br/>
            <input type="submit" value="Search" className="btn btn-primary"/>
            </form>
         <h1>New York</h1>
         <ul> 
             <li> Wednesday 07:00</li>
             <li>Mostly Cloudy</li>
         </ul>
         <div className="row mt-3">
             <div className="col-6">
                 <div className= "clearfix">
                 <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                 alt="Mostly Cloudy" className="float-right"
                 />
                 <div className="float-right" />
                 <span className="temperature">{Math.round(temperature)} 
                 </span>
                 <span className="unit">°C</span>
                 </div>
                 <div className="col-6">
                     <ul>
                         <li>Precipitation : 15%</li>
                         <li>Humidity: 72%</li>
                         <li>Wind: 13 km/h%</li>
                         </ul>
                    </div>
                </div>
            </div>
            </div>
        );
    } else {
        const apiKey = "47ffbfdafe24c221093587cd0b547a8c";
        let city = "New York";
        let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        axios.get(apiUrl).then(handleResponse)

return "Loading...";
    }   
};
