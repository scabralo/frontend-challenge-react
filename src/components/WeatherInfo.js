import React, { Component } from 'react'

class WeatherInfo extends Component {
  render() {
    return (
      <div className="weather-info-container">
        <div className="weather-data-wrapper">
          <div className="temp-container d-flex align-items-center flex-column">
            <p className="current-temp d-flex">
              <img className="weather-icon"src="http://openweathermap.org/img/wn/01n.png" alt="weather icon" />
              <span className="temp-value">--</span>
              <span className="farenheit-simbol">&#8457;</span>
              <span className="celsius-simbol hidden">&#8451;</span>
            </p>
            <div className="max-min-container d-flex justify-content-center">
              <p className="max-temp d-flex">
                H&nbsp;<span className="max-temp-value">--</span>&#8457;
              </p>
              <p className="min-temp d-flex">
                L&nbsp;<span className="min-temp-value">--</span>&#8457;
              </p>
            </div>
          </div>
        </div>
        <div className="weather-message-wrapper hidden">
            <div className="weather-message alert alert-danger" role="alert"></div>
        </div>
      </div>
    )
  }
}

export default WeatherInfo