import React from 'react'
import './description.css'

//import { FaArrowDown } from "react-icons/fa";
//import { BiHappy } from "react-icons/bi"
//import { MdCompress, MdOutlineWeatherDrop } from "react-icons/md"

const Description = (weather, units) => {
    
   // const tempUnit = units === 'metric' ? '°C' : '°F'
    

    //const card =[
       /* {
            id: 1,
            icon: <FaArrowDown />,
            title: "min",
            data: weather.temp_min.toFixed(),
            unit: tempUnit,
        },
        {
            id: 2,
            icon: <FaArrowDown />,
            title: "min",
            data: weather.temp_min.toFixed(),
            unit: tempUnit,
        },
        {
            id: 3,
            icon: <BiHappy />,
            title: "feel like",
            data: weather.temp_min.toFixed(),
            unit: tempUnit,
        },
        {
            id: 4,
            icon: <MdCompress />,
            title: "pressure",
            data: weather.pressure,
            unit: "hPa",
        },
        {
            id: 5,
            icon: <MdOutlineWeatherDrop />,
            title: "humidity",
            data: weather.humidity,
            unit: "%",
        },
        {
            id: 6,
            icon: <FaWind />,
            title: "wind speed",
            data: weather.speed.toFixed(),
            unit: "windUnit",
        },*/
        
        
    //]
  return (
    <div className="section section_description">
       {/*  {
            card.map(({id, icon, title, data, unit}) => (
                
            ))
        }
        */}
        <div  className="card">
                <div className="description_card-icon">
                    {/*<FaArrowDown /> {icon} <small>{title}</small> <h2>{`${data} ${unit}`}</h2>*/}
                    <small>max</small>
                </div>
                <h2> 38 °C</h2>
            </div>
            <div  className="card">
                <div className="description_card-icon">
                    {/*<FaArrowDown />*/}
                    <small>min</small>
                </div>
                <h2> 32 °C</h2>
            </div>
        
     
    </div>
  )
}

export default Description
