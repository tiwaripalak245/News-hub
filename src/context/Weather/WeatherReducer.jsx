const WeatherReducer = (state, action) => {

    switch (action.type){

case "FIND_WEATHER":
    return{
...state,
weatherData : action.payload
    }



        default:
            return state
    }
}

export default WeatherReducer;