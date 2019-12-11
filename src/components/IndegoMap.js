import React, { Component } from 'react'
import WeatherInfo from './WeatherInfo'

class IndegoMap extends Component {
  render() {
    return (
      <main>
        <WeatherInfo />
        <div id="map-container"></div>
        <div id="overlay">
          <div id="popup">
              <div id="close" className="btn btn-danger">X</div>
              <h2 id="station-name">Station</h2>
              <p><strong>Bikes:</strong> <span id="bikes-available"></span> available</p>
              <p><strong>Docks:</strong> <span id="docks-available"></span> available</p>
              <p><strong>Address:</strong> <span id="station-address"></span></p>
          </div>
        </div>
      </main>
    )
  }
}

export default IndegoMap