import { useEffect } from 'react';
import './App.css';
import Description from './Components/Description';
import { getFormattedWeatherData } from './weatherService';
import { useState } from 'react';
function App() {

  const [city, setCity] = useState('Dakar')
  const [weather, setWeather] = useState(null)
  const [units, setUnits] = useState("metric")

  useEffect(() => {
    const fetchWeatherData = async () =>{
      const data = await getFormattedWeatherData(city, units);
      setWeather(data);
    }
    
    fetchWeatherData()

  }, [units, city])

  const handleUnitsClick = (e) => {
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1)
  

    const isCelsius = currentUnit === 'C'
    button.innerText = isCelsius ? '°F' : '°C'
    setUnits(isCelsius ? "metric" : "imperial")
  }

  const enterKeyPressed = (e) =>{
    if (e.keyCode === 18) {
      setCity(e.currentTarget.value)
      e.currentTarget.blur();
    }
  }

  return (
    <div className="App" >
    
   <div className="overlay">
    {
      weather && (
        <div className="container">
      <div className="section section_inputs">
        <input onKeyDown={enterKeyPressed} type="text" name="City" placeholder="Entrez le non Ville ..."></input>
        <button onClick={(e) => handleUnitsClick(e)}>°F</button>
      </div>

      <div className='header'>
        <h1 className='title'> Météo</h1>
        <p className='text'>
          La météo est l'évaluation du temps 
          qu'il fait ou qu'il va faire à très court terme. <br/>
          Elle se définit par des valeurs instantanées et locales de la température, 
          des précipitations, de la pression, de la nébulosité etc.<br/>
          Depuis quelques semaines, 
          les météorologues ont du mal à prévoir où les 
          orages vont tomber dans notre région
        </p>
      </div>

      <a href='./Next'>
      <div className="section section_temperature">
        <div className="icon">
          <h3>{`${weather.name}, ${weather.country}`}</h3>
          <img className="image" src={weather.iconURL} alt="weatherIcon"></img>
          <h3>{weather.description}</h3>
        </div>
        <div className="temperature">
          <h1>{`${weather.temp.toFixed()} °${units === 'metric' ? "C" : "F"}`}</h1>
        </div>
      </div>
      </a>
      {/* bottom description */}
      <Description weather={weather} units={units}></Description>
    </div>
      )
    }
   </div>
  </div>
  );
}

export default App;
