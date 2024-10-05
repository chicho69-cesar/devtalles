require('dotenv').config()
require('colors');

const { readInput, inquirerMenu, pause, listPlaces } = require("./helpers/inquirer");
const Searches = require("./models/searches");

const main = async () => {
  const searches = new Searches();
  let opt = 0;

  do {
    opt = await inquirerMenu();
    
    switch (opt) {
      case 1:
        // Mostrar mensaje
        const searchTerm = await readInput('Buscar ciudad: ');
        
        // Buscar los lugares
        const places = await searches.searchCities(searchTerm);
        
        // Seleccionar el lugar
        const id = await listPlaces(places);
        if (id === '0') continue;

        const placeSelected = places.find(place => place.id === id);
        
        // Guardar en DB
        searches.addHistory(placeSelected.name);

        // Clima
        const weather = await searches.searchWeatherByPlace(placeSelected.lat, placeSelected.lng);

        // Mostrar los resultados
        console.log('\nInformacion de la ciudad\n'.green);
        console.log('Ciudad: '.green, placeSelected.name);
        console.log('Lat: '.green, placeSelected.lat);
        console.log('Lng: '.green, placeSelected.lng);
        console.log('Temperatura: '.green, weather.temp);
        console.log('Minima: '.green, weather.min);
        console.log('Maxima: '.green, weather.max);
        console.log('Como esta el clima: '.green, weather.desc);

        break;

      case 2:
        searches.capitalizedHistory.forEach((place, i) => {
          const idx = `${i + 1}.`.green;
          console.log(`${idx} ${place}`);
        });
        
        break;
    }
    
    if (opt !== 0) await pause();
  } while(opt != 0);
}

main();
