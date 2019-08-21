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
      data: [],
      films: []
    };
  }

  componentDidMount() {
    // let array = [films]
    // const promises = array.map(el => {
    //   return fetch
    // })
    //   .then(response => response.json())

    //   .then(data => this.setState({films: data.results}))
    //   .then(() => console.log(this.state.films))
    //   .catch(error => console.log(error));

      // return Promise.all(filmInfo);

    // const films = ['https://swapi.co/api/films']
    // const promises = films.map(el => {
    //   return fetch(el)
    //   .then(response => response.json())
    //   .then(data => ({...data}))
    //   .catch(error => console.log(error))
    // })
    // return Promise.all(promises)
    // .then(data => console.log(data[0].results))

    fetch('https://swapi.co/api/')
      .then(response => response.json())
      .then(data => this.fetchFilms(data.films))
      
      .catch(error => console.log(error));


  }

  // Promise.all([this.state.films]);

  fetchFilms = (filmData) => {
    fetch(`${filmData}`)
      .then(response => response.json())
      .then(data => this.setState({films: data.results[0]}))
      .catch(error => console.log(error));
      // return Promise.all(this.state.films);
  }



  render() {
    console.log('data', this.state.films)
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
