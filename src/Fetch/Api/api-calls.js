export const fetchPeople = (allPeople) => {
    const promises = allPeople.map(person => {
      return fetch(person.homeworld)
        .then(response => response.json())
        .then(data => ({ 
          name: person.name,
          homeworld: data.name,
          population: data.population,
          species: person.species[0],
          isFavorite: false
        }))
        .catch(error => console.log(error));
    });
    return Promise.all(promises)
  }

  export const fetchSpecies = (allPeople) => {
    const promises = allPeople.map(person => {
      return fetch(person.species)
        .then(response => response.json())
        .then(data => ({
          ...person,
          species: data.name,
          language: data.language
        }))
        .catch(error => console.log(error));
    });
    return Promise.all(promises)
  }

  export const createPlanets = (data) => {
    let planets = data.map(planet => {
      let planetResidents = [];
        planet.residents.forEach(resident => {
          return fetch(resident)
          .then(response => response.json())
          .then(data => planetResidents.push(data.name));
        });
        return {
          name: planet.name,
          terrain: planet.terrain,
          population: planet.population,
          climate: planet.climate,
          residents: planetResidents,
          isFavorite: false
        };
      });
      return Promise.all(planets);
    };

    export const getVehicles = (allVehicles) => {
      return allVehicles.map(vehicle => {
        return ({
          name: vehicle.name,
          model: vehicle.model,
          vehicleClass: vehicle.vehicle_class,
          numOfPassengers: vehicle.passengers,
          isFavorite: false
        })
      })
    };

