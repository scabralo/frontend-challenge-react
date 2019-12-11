import React from 'react'

export default function Footer() {
  return (
    <footer className="d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col d-flex justify-content-center">
            <p>Coded with <span className="red-text"><strong>LOVE</strong></span> by <a href="https://github.com/scabralo">Sergio Cabral</a> for <a href="https://punkave.com/">P'unk Ave</a>.</p>
          </div>
        </div>
      </div>
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBWLYQ5bZ6g4HtY91rUz1E9CKZ-LKpn8Lk&libraries=places"></script>
      {/* <script src="script.js"></script> */}
    </footer>
  )
}
