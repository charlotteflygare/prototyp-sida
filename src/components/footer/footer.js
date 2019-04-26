import React from "react"
import { HashRouter as Router, Route } from "react-router-dom"
import "./footer.css"


class Footer extends React.Component {

  render() {
    return (
      <div className="footer-wrapper">
        <div className="footer-container">
        <div className="footer-container-kontakt">
          <ul>
            <li><h2>Kontakt</h2></li>
            <li><h2>—</h2></li>
            <li><p>Bondegatan 21</p></li>
            <li><p>116 33 Stockholm</p></li>
            <li><p>+46 8-410 328 50</p></li>
            <li><p> info@familjenpangea.se</p></li>
          </ul>
        </div>
        <div className="footer-container-talang">
          <ul>
            <li><h2>Talang</h2></li>
            <li><h2>—</h2></li>
            <li><p>Vi är alltid intresserade
            <span>av nya engagerade talanger.</span>
            <span>Hör av dig till oss!</span></p>
            <p><span>work@familjenpangea.se</span></p></li>
          </ul>
        </div>

        <div className="footer-container-talang">
        <ul>
          <li><h2>Följ oss</h2></li>
          <li><h2>—</h2></li>
          <li><p><a href="https://www.instagram.com/explore/locations/8057687/familjenpangea/">Instagram</a></p></li>
          <li><p><a href="https://www.facebook.com/FamiljenPangea/">Facebook</a></p></li>
        </ul>
        </div>

        </div>
      </div>

    )
  }
}

export default Footer
