export const fetchWeather = async(city) => {
const response = await fetch (`https://api.weatherapi.com/v1/current.json?key=bcaf036669b144f5b17201731242302&q=${city}&aqi=yes`)
const data = await response.json();
return data;
}