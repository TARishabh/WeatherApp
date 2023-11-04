import React,{useState} from 'react'

export default function WeatherDays(props) {
    const [check,updatedCheck] = useState(false)
    const handleOnClick = () =>{
        if (check === true){
            updatedCheck(false);
            return
        };
        updatedCheck(true);
    }

    const {date,max_temp_in_c,min_temp_in_c,max_temp_in_f,min_temp_in_f,condition} = props;
    return (
        <div className="card" style={{ width: '18rem'}}>
            <div className="card-body">
                <h5 className="card-title">{date}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">{condition}</h6>
                <p className="card-text">Max Temperature: {!check?`${max_temp_in_c} °C`:`${max_temp_in_f}°F`}</p>
                <p className="card-text">Min Temperature: {!check?`${min_temp_in_c} °C`:`${min_temp_in_f}°F`}</p>
                <button onClick={handleOnClick} className="btn btn-outline-success" type="button">In °F</button>
            </div>
        </div>
    )
}
