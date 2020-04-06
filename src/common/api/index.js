/**
 * Model entities definitions
 */
export const Model = {
  starship: { url: 'https://swapi.co/api/starships' }
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
      }

      callback(payload)
    })
}

export default api;