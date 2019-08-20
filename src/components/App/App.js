import React, { Component } from 'react';
import Movies from '../Movies/Movies';
import FavR2D2 from '../FavR2D2/FavR2D2';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <main>
        <h1>Galaxy Far Far Away</h1>
        <Movies />
        <FavR2D2 />
      </main>
    );
  }
  
}

export default App;
