import React, { Component } from 'react';

import WeatherDisplay from './WeatherDisplay';

import './App.css';

const PLACES = [
  { name: "Palo Alto", zip: "94303" },
  { name: "San Jose", zip: "94088" },
  { name: "Santa Cruz", zip: "95062" },
  { name: "Honolulu", zip: "96803" }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      activePlace: PLACES[0]
    };
  }

  render() {
    const activePlace = this.state.activePlace;

    return (
      <div className="App">
        <WeatherDisplay
          key={activePlace.zip}
          zip={activePlace.zip}/>

        {
          PLACES.map(place => (
            <button
              key={place.zip}
              onClick={() => {
                this.setState({
                  activePlace: place
                });
              }}>
              {place.name}
            </button>
          ))
        }
      </div>
    );
  }
}

export default App;
