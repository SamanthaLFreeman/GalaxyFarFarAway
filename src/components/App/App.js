import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Movies from '../Movies/Movies';
import FavR2D2 from '../FavR2D2/FavR2D2';
import Categories from '../Categories/Categories';
import CardContainer from '../CardContainer/CardContainer';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      film: [],
      people: [],
      planets: [],
      vehicles: [],
      favorites: []
    };
  }

  componentDidMount() {
    fetch('https://swapi.co/api/people')
      .then(res => res.json())
      .then(data => this.fetchPeople(data.results))
      .then(data => this.fetchSpecies(data))
      .then(data => this.setState({people: data}))
      .catch(error => console.log(error))

    fetch('https://swapi.co/api/planets/')
      .then(response => response.json())
      .then(data => data.results)
      .then(data => this.createPlanets(data))
      .then(data => this.setState({ planets: data }))
      .catch(error => console.log(error));

    fetch('https://swapi.co/api/vehicles/')
      .then(response => response.json())
      .then(data => this.getVehicles(data.results))
      .then(data => this.setState({ vehicles: data}))
      .catch(error => console.log(error))

    fetch('https://swapi.co/api/films/')
      .then(response => response.json())
      .then(data => this.setState({ film: data.results[this.getRandomNumber()] }))
      .catch(error => console.log(error));
  }

  fetchPeople = (allPeople) => {
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

  fetchSpecies = (allPeople) => {
    const promises = allPeople.map(person => {
      return fetch(person.species)
        .then(response => response.json())
        .then(data => ({
          ...person,
          species: data.name
        }))
        .catch(error => console.log(error));
    });
    return Promise.all(promises)
  }

  getRandomNumber = () => {
    return Math.floor(Math.random() * Math.floor(7));
  }

  createPlanets(data) {
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

    getVehicles = (allVehicles) => {
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

    toggleFavorite = (name, type) => {
      const favoritedCard = this.state[type].find(card => {
        return card.name === name
      });
      favoritedCard.isFavorite = !favoritedCard.isFavorite;
      this.setState({[type]: [...this.state[type]]});
      this.addToFavorites(favoritedCard); 
    }

    addToFavorites = (favCard) => {
      if(favCard.isFavorite === true){
        this.setState({favorites: [...this.state.favorites, favCard]});
      } else {
        const filteredFavs = this.state.favorites.filter(fav => {
          return fav.name !== favCard.name
        });
        this.setState({favorites: [...filteredFavs]});
      }
    }

  render() {
    return (
      <main>
        <h1>Galaxy Far Far Away</h1>
        <Movies film={this.state.film}/>
        <FavR2D2 />
        <Categories people={this.state.people} planets={this.state.planets}/>
        <Route exact path='/people' render={() => <CardContainer type='people' allData={this.state.people} toggleFavorite={this.toggleFavorite}/>} />
        <Route exact path='/planets' render={() => <CardContainer type='planets' allData={this.state.planets} toggleFavorite={this.toggleFavorite}/>} />
        <Route exact path='/vehicles' render={() => <CardContainer type='vehicles' allData={this.state.vehicles} toggleFavorite={this.toggleFavorite}/>} />
      </main>
    )
  }
  
}

export default App;
