import React, {useEffect,useState,useRef} from 'react'
import './Weatherr.css'
import search_icon from './png/Sun.png'
import sun_icon from './png/pngwing.com.png'
// import rain_icon from './png/rain.png'
import wind_icon from './png/wind.png'
import Humidity_icon from './png/Humidity.png'
const Weatherr = () => {
  const inputRef=useRef()
  
  const [weatherData,setWeatherData]=useState(true);
  const search =async(city)=>{
    if(city ===""){
      alert("Enter City name");
      return
    }
       try {
          const url=(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=86d58278648e78b0ca1378d650fba83f`);
          const response =await fetch(url);
          const data = await response.json();
          console.log(data);
          setWeatherData({
            humidity:data.main.humidity,
            windSpeed:data.wind.speed,
            temperature:Math.floor(data.main.temp),
            location:data.name,
            

          })
       } catch (error) {
        
       }
  }
    useEffect(()=>{
      search("Jaipur");
    },[])

  return (
    
    <div className='Weather' >
      <h1 className='mosm'  >मौसम</h1>
      <div className='search-bar' >
        <input ref={inputRef} type="text" placeholder='Search city' onClick={()=>search(inputRef.current.value)} />
        <img src={search_icon} alt='/' />
      </div>
      <img src={sun_icon} className='weather-icon' alt='/' />
      <p className='temp' >{weatherData.temperature}°C</p>
      <p className='location' >{weatherData.location}</p>
      <div className='weather-data' >
        
      <div className='col' >
        <img src={Humidity_icon} alt=""/>
        <div>
          <p>
            {weatherData.humidity}
          </p>
          <span>Humidity</span>
        </div>

      </div>
      <div className='col' >
        <img src={wind_icon} alt=""/>
        <div>
          <p>
            {weatherData.windSpeed}
          </p>
          <span>Wind speed</span>
        </div>

      </div>
      </div>
    </div>
  )
}

export default Weatherr