import { defaultCipherList } from "constants";

/**
 * Model entities definitions
 */
export const Model = {
  starship: { url: 'https://swapi.co/api/starships' },
  vehicle: { url: 'https://swapi.co/api/vehicles' },
  planet: { url: 'https://swapi.co/api/planets' }
}

const api = (model, callback) => {
  fetch(model.url)
    .then(results => results.json())
    .then(data => {
      let payload;

      switch (model) {
        case Model.starship:
          payload = data
            ? data.results.map((item, index) => ({
              name: item.name,
              id: index + 1,
              url: item.url,
              model: item.model,
              manufacturer: item.manufacturer,
              price: item.cost_in_credits,
              max_speed: item.max_atmosphering_speed,
              crew: item.crew,
              passengers: item.passengers,
              cargo: item.cargo_capacity
            }))
            : [];
          break;
        case Model.vehicle:
          payload = data
            ? data.results.map((item, index) => ({
              name: item.name,
              id: index + 1,
              url: item.url,
              model: item.model,
              manufacturer: item.manufacturer,
              price: item.cost_in_credits,
              max_speed: item.max_atmosphering_speed,
              crew: item.crew,
              passengers: item.passengers,
              cargo: item.cargo_capacity
            }))
            : [];
          break;
        case Model.planet:
          payload = data
            ? data.results.map((item, index) => ({
              name: item.name,
              id: index + 1,
              diameter: item.diameter,
              rotation: item.rotation_period,
              orbital: item.orbital_period,
              climate: item.climate,
              gravity: item.gravity,
              terrain: item.terrain,
              surface_water: item.surface_water,
              population: item.population
            }))
            : [];
          break;
        default:
          return null
      }
      callback(payload)
    })
}

export default api;