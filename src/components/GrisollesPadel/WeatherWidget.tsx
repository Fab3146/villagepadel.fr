import React, { useEffect, useState } from 'react';
import { Cloud, Sun, Wind, Droplets } from 'lucide-react';
import { getWeather } from '../../services/weather';
import type { WeatherData } from '../../types/weather';

const WeatherWidget = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await getWeather();
        setWeather(data);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/2 mb-4"></div>
        <div className="space-y-3">
          <div className="h-6 bg-gray-200 rounded"></div>
          <div className="h-6 bg-gray-200 rounded"></div>
          <div className="h-6 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Sun className="text-brand-orange" />
        Météo à Grisolles
      </h2>

      {weather && (
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Cloud className="text-gray-600" />
            <span className="text-lg">
              {weather.current.weather_descriptions[0]}
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            <Sun className="text-gray-600" />
            <span className="text-lg">
              {weather.current.temperature}°C
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Wind className="text-gray-600" />
            <span className="text-lg">
              Vent: {weather.current.wind_speed} km/h
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Droplets className="text-gray-600" />
            <span className="text-lg">
              Précipitations: {weather.current.precip}%
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherWidget;