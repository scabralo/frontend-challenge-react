import React, { Component } from 'react'
import WeatherInfo from './WeatherInfo'
import Overlay from './Overlay'

class IndegoMap extends Component {

  render() {
    return (
      <main>
        <WeatherInfo />
        <div id="map-container"></div>
        <Overlay />
      </main>
    )
  }
}

export default IndegoMap