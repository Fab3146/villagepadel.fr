export interface WeatherData {
  current: {
    temperature: number;
    weather_descriptions: string[];
    precip: number;
    wind_speed: number;
    humidity: number;
  };
}