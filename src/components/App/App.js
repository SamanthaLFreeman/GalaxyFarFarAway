import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Movies from '../Movies/Movies';
import FavR2D2 from '../FavR2D2/FavR2D2';
import Categories from '../Categories/Categories';
import CardContainer from '../CardContainer/CardContainer';
import * as apiCalls from '../../Fetch/Api/api-calls';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      film: [],
      people: [],
      planets: [],
      vehicles: [],
      favorites: [],
      btnClicked: false
    };
  }

  componentDidMount() {
    fetch('https://swapi.co/api/films/')
      .then(response => response.json())
      .then(data => this.setState({ film: data.results[this.getRandomNumber()] }))
      .catch(error => console.log(error));

    fetch('https://swapi.co/api/people')
      .then(res => res.json())
      .then(data => apiCalls.fetchPeople(data.results))
      .then(data => apiCalls.fetchSpecies(data))
      .then(data => this.setState({people: data}))
      .catch(error => console.log(error))

    fetch('https://swapi.co/api/planets/')
      .then(response => response.json())
      .then(data => data.results)
      .then(data => apiCalls.createPlanets(data))
      .then(data => this.setState({ planets: data }))
      .catch(error => console.log(error));

    fetch('https://swapi.co/api/vehicles/')
      .then(response => response.json())
      .then(data => apiCalls.getVehicles(data.results))
      .then(data => this.setState({ vehicles: data}))
      .catch(error => console.log(error))
  }
  
  getRandomNumber = () => {
    return Math.floor(Math.random() * Math.floor(7));
  }
  
  toggleFavorite = (name, type) => {
    const favoritedCard = this.state[type].find(card => {
      return card.name === name
    });
    favoritedCard.isFavorite = !favoritedCard.isFavorite;
    this.setState({[type]: [...this.state[type]]});
    this.updateFavorites(favoritedCard); 
  }

  updateFavorites = (favCard) => {
    if(favCard.isFavorite === true){
      this.setState({favorites: [...this.state.favorites, favCard]});
    } else {
      const filteredFavs = this.state.favorites.filter(fav => {
        return fav.name !== favCard.name
      });
      this.setState({favorites: [...filteredFavs]});
    }
  }

  checkAvail = () => {
    return this.setState({btnClicked: true});
  }
  
  render() {
    return (
      <main>
        <h1>Galaxy Far Far Away</h1>
        <Categories checkAvail={this.checkAvail}/>
        <FavR2D2 numOfFavs={this.state.favorites.length} checkAvail={this.checkAvail}/>
        <Movies film={this.state.film} btnClicked={this.state.btnClicked}/>
        <Route exact path='/people' render={() => <CardContainer allData={this.state.people} toggleFavorite={this.toggleFavorite}/>} />
        <Route exact path='/planets' render={() => <CardContainer allData={this.state.planets} toggleFavorite={this.toggleFavorite}/>} />
        <Route exact path='/vehicles' render={() => <CardContainer allData={this.state.vehicles} toggleFavorite={this.toggleFavorite}/>} />
        <Route exact path='/favorites' render={() => <CardContainer path='favorites' allData={this.state.favorites} toggleFavorite={this.toggleFavorite} />} />
      </main>
    )
  }
  
}

export default App;
