export const findPeople = () => {
  return fetch('https://swapi.co/api/people')
    .then(response => {
      if (!response.ok) {
        throw Error('Error fetching people')
      }
      return response.json()
    })
    .catch(error => {
      throw Error(error.message)
    })
}

export const fetchPeople = (allPeople) => {
    const promises = allPeople.map(person => {
      return fetch(person.homeworld)
        .then(response => response.json())
        .then(data => ({ 
          name: person.name,
          homeworld: data.name,
          population: data.population,
          species: person.species[0],
          isFavorite: false,
          type: 'people'
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
          .then(data => planetResidents.push(`${data.name}, `));
        });
        return {
          name: planet.name,
          terrain: planet.terrain,
          population: planet.population,
          climate: planet.climate,
          residents: planetResidents,
          isFavorite: false,
          type: 'planets'
        };
      });
      return Promise.all(planets);
    };

    export const getVehicles = (allVehicles) => {
      let vehiclePromise = allVehicles.map(vehicle => {
        return ({
          name: vehicle.name,
          model: vehicle.model,
          vehicleClass: vehicle.vehicle_class,
          numOfPassengers: vehicle.passengers,
          isFavorite: false,
          type: 'vehicles'
        })
      })
      return Promise.all(vehiclePromise);
    };

