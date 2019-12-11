import React, { Component } from 'react'

class Header extends Component {

  render() {
    return (
      <header className='d-flex align-items-center'>
        <div className="container-xl">
            <div className="row">
              <div className="col d-flex flex-column flex-md-row justify-content-between">
                <h1>Indego Locator</h1>
                <form id="location-search" className="d-flex align-items-center justify-content-end">
                  <input type="text" name="location" id="location-input" placeholder="Give me an address!" />
                  <input type="submit" value="Search!" className="btn btn-primary" />
                </form>
              </div>
            </div>
        </div>
      </header>
    )
  }
}

export default Header