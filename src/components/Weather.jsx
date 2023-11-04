import React, { useState } from 'react'
import WeatherDays from './WeatherDays';

export default function Weather(props) {
    const [check,updatedCheck] = useState(false)
    const handleOnClick = () =>{
        if (check === true){
            updatedCheck(false);
            return
        };
        updatedCheck(true);
    }
    const {weatherData} = props;
    return (
        weatherData ? (
            <div className='container my-5' style={{textAlign:'center'}}>
            <p>Location: {weatherData.location.name}</p>
            <p>Temperature: {!check?`${weatherData.current.temp_c} °C`:`${weatherData.current.temp_f}°F`}</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span>
                    <button onClick={handleOnClick} className="btn btn-outline-success" type="button">In °F</button>
                    {console.log(weatherData.forecast.forecastday.length)}
                    <div className='row'>
                        {weatherData.forecast.forecastday.length >=2 ? (
                            weatherData.forecast.forecastday.map((element)=>(
                                <div className='col md-4 my-3' key={element.date}>
                                    <WeatherDays date={element.date} max_temp_in_c={element.day.maxtemp_c} min_temp_in_c={element.day.mintemp_c} max_temp_in_f = {element.day.maxtemp_f} min_temp_in_f = {element.day.mintemp_f} condition={element.day.condition.text}/>
                                </div>
                            ))
                        ):(
                            null
                        )}
                    </div>
                </span>
            </div>
        </div>
        ):(
            null
        )
    );
}

