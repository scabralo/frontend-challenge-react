import React from 'react'

export default function Overlay() {
  return (
    <div id="overlay">
      <div id="popup">
          <div id="close" className="btn btn-danger">X</div>
          <h2 id="station-name">Station</h2>
          <p><strong>Bikes:</strong> <span id="bikes-available"></span> available</p>
          <p><strong>Docks:</strong> <span id="docks-available"></span> available</p>
          <p><strong>Address:</strong> <span id="station-address"></span></p>
      </div>
    </div>
  )
}