const fs = require('node:fs');
const axios = require('axios');

class Searches {
  history = [];
  dbPath = 'db/database.json';

  constructor() {
    this.history = [...this.readFromDB()];
  }

  get capitalizedHistory() {
    return this.history.map(place => {
      let words = place.split(' ');
      words = words.map(word => word[0].toUpperCase() + word.slice(1));
      return words.join(' ');
    });
  }

  get paramsMapbox() {
    return {
      access_token: process.env.MAPBOX,
      limit: 5,
      language: 'es'
    };
  }

  get paramsWeather() {
    return {
      appid: process.env.OPEN_WEATHER,
      units: 'metric',
      lang: 'es'
    };
  }

  async searchCities(place) {
    try {
      const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json`,
        params: this.paramsMapbox
      });
      
      const resp = await instance.get();
      
      return resp.data.features.map(city => ({
        id: city.id,
        name: city.place_name,
        lng: city.center[0],
        lat: city.center[1]
      }));
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async searchWeatherByPlace(lat, lon) {
    try {
      const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather`,
        params: { ...this.paramsWeather, lat, lon }
      });

      const resp = await instance.get();
      const { weather, main } = resp.data;

      return {
        desc: weather[0].description,
        min: main.temp_min,
        max: main.temp_max,
        temp: main.temp
      };
    } catch (error) {
      console.log(error);
      return {};
    }
  }

  async addHistory(place = '') {
    if (this.history.includes(place.toLowerCase())) {
      return;
    }

    this.history = this.history.splice(0, 5);
    this.history.unshift(place.toLowerCase());
    this.saveInDB();
  }

  saveInDB() {
    const payload = {
      history: this.history
    };

    fs.writeFileSync(this.dbPath, JSON.stringify(payload));
  }

  readFromDB() {
    if (!fs.existsSync(this.dbPath)) {
      return [];
    }

    const info = fs.readFileSync(this.dbPath, { encoding: 'utf-8' });
    const data = JSON.parse(info);
    return data.history;
  }
}

module.exports = Searches;
