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
      people: []
    }
  }

  componentDidMount() {
    fetch('https://swapi.co/api/people')
      .then(res => res.json())
      .then(data => this.fetchPeople(data.results))
      .then(data => this.fetchSpecies(data))
      .then(data => this.setState({people: data}))
  }

  fetchPeople = (allPeople) => {
    const promises = allPeople.map(person => {
      return fetch(person.homeworld)
        .then(response => response.json())
        .then(data => ({ 
          name: person.name,
          homeworld: data.name,
          population: data.population,
          species: person.species[0]
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

  render() {
    return (
      <main>
        <h1>Galaxy Far Far Away</h1>
        <Movies film={this.state.film}/>
        <FavR2D2 />
        <Categories />
        <CardContainer people={this.state.people}/>
      </main>
    )
  }
  
}

export default App;
