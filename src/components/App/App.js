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
      films: []
    };
  }

  componentDidMount() {
    fetch('https://swapi.co/api/')
      .then(response => response.json())
      .then(data => this.fetchFilms(data.films))
      .catch(error => console.log(error));
  }

  fetchFilms = (filmData) => {
    fetch(`${filmData}`)
      .then(response => response.json())
      .then(data => this.setState({films: data.results}))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <main>
        <h1>Galaxy Far Far Away</h1>
        <Movies films={this.state.films}/>
        <FavR2D2 />
        <Categories />
        <CardContainer />
      </main>
    );
  }
  
}

export default App;
