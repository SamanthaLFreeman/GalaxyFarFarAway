import React, { Component } from 'react';
import Movies from '../Movies/Movies'
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
      </main>
    );
  }
  
}

export default App;
