import React, { Component } from 'react';
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
      planets: []
    };
  }

    componentDidMount() {
      fetch('https://swapi.co/api/people/')
        .then(response => response.json())
        .then(data => this.createPeople(data.results))
        .catch(error => console.log(error));

      fetch('https://swapi.co/api/planets/')
        .then(response => response.json())
        .then(data => data.results)
        .then(data => this.createPlanets(data))
        .catch(error => console.log(error));;
      fetch('https://swapi.co/api/vehicles/');

      fetch('https://swapi.co/api/films/')
        .then(response => response.json())
        .then(data => this.setState({film: data.results[this.getRandomNumber()]}))
        .catch(error => console.log(error));
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
          resident: planetResidents
        };
      });
      console.log(planets)
      return planets;
    };

  render() {
    return (
      <main>
        <h1>Galaxy Far Far Away</h1>
        <Movies film={this.state.film}/>
        <FavR2D2 />
        <Categories />
        <CardContainer people={this.state.people}/>
      </main>
    );
  }
  
}

export default App;
