const API_KEY = '3369450c54dd038b0fa1fa3630b12d54'
const makeIconURL=(iconId) => `https://openweathermap.org/img/wn/${iconId}@2x.png`

const getFormattedWeatherData = async (city, units = 'metric') => {
    const URL =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units${units}`;

    const data = await fetch(URL).then((res) => res.json()).then((data) => data);

    const {weather, main: {temp, feels_like, temp_min, temp_max, pressure, humidity},
    wind:{speed},
    sys:{country},
    name,
} = data;

    const {description, icon} = weather[0]

    return{
        description, 
        iconURL: makeIconURL (icon), 
        temp, 
        feels_like, 
        temp_min, 
        temp_max, 
        pressure, 
        humidity, 
        speed, 
        country, 
        name,
    };

};

export {getFormattedWeatherData}