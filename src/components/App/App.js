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
    };
  }

  componentDidMount() {
    const data = [
      { title: 'people', url: 'https://swapi.co/api/people/' },
      { title: 'planets', url: 'https://swapi.co/api/planets/' },
      { title: 'vehicles', url: 'https://swapi.co/api/vehicles/' },
      { title: 'films', url: 'https://swapi.co/api/films/' }
    ];
    const promises = data.map(el => {
      return fetch(el.url)
      .then(response => response.json())
      .then(data => (({...data, title: el.title})))
      .catch(error => console.log(error))
    });
    this.fetchData(promises)
  }

  fetchData = (promises) => {
    return Promise.all(promises)
      .then(data => {
        console.log('allData', data)
        this.setState({ film: data.find(el => el.title === 'films').results[0] })
        this.setState({ people: data.find(el => el.title === 'people').results })
        this.fetchPeople()
      })
  }

  fetchPeople = () => {
    const promises = this.state.people.map(person => {
      return fetch(person.homeworld)
        .then(response => response.json())
        .then(data => ({ ...data }))
        .catch(error => console.log(error));
    });
    return Promise.all(promises)
      .then(data => console.log('hey', data))
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
    );
  }
  
}

export default App;
