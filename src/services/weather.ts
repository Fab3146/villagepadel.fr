const API_KEY = '8c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c'; // You'll need to get an API key from OpenWeatherMap
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export async function getWeather(): Promise<WeatherData> {
  try {
    const response = await fetch(
      `${BASE_URL}/weather?q=Grisolles,FR&units=metric&appid=${API_KEY}&lang=fr`
    );
    const data = await response.json();
    return {
      current: {
        temperature: data.main.temp,
        weather_descriptions: [data.weather[0].description],
        precip: data.rain ? data.rain['1h'] || 0 : 0,
        wind_speed: data.wind.speed * 3.6, // Convert m/s to km/h
        humidity: data.main.humidity
      }
    };
  } catch (error) {
    console.error('Error fetching weather:', error);
    throw error;
  }
}