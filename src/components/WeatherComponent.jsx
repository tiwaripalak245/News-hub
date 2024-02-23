import { useContext, useEffect, useState } from "react"
import WeatherContext from "../context/Weather/WeatherContext"
import { fetchWeather } from "../context/Weather/WeatherAction"



const WeatherComponent = () => {

    const [find, setFind] = useState("")
    const { weatherData, WeatherDispatch} = useContext(WeatherContext)

   console.log(weatherData)
    const getWeather = async (city) => {
        const data = await fetchWeather(city)


        WeatherDispatch({
            type: "FIND_WEATHER",
            payload: data,
        });
        
    };

    useEffect(() => {
        getWeather("Indore")

    }, []);

    const weatherSearch = (e) => {
        e.preventDefault()
        getWeather(find)
        setFind("")
    }

    if(!weatherData){
        return (
            
            <h1>Loading..</h1>
            
        )
    }

    return (
        <>
            <div className="weather-container">

                <div className="card my-3 rounded-2">
                    <h1 className="mx-3 display-5">{weatherData?.location?.name}</h1>
                    <h1 className="mx-3 display-6 text-secondary">{weatherData?.current?.temp_c}</h1>

                    <form className="form-control" onSubmit={weatherSearch}>
                        <input type="text"  placeholder='Search'
                        value={find}
                        onChange={(e) => setFind(e.target.value)}/>
                    </form>
                    <span>
                        {/* <h3 className="text-center text-success">{weatherData.location.localtime}</h3>
                        <h3 className="text-center text-danger">{weatherData.current.last_updated}</h3> */}

                    </span>
                </div>
            </div>
        </>
    )
}

export default WeatherComponent
