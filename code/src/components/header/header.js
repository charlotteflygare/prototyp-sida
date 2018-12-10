import React from "react"
import { HashRouter as Router, Route } from "react-router-dom"
import "./header.css"

class Header extends React.Component {

  render() {
    return (
      <div className="header-container">
      <div className="header-menu">
      <ul>
        <li><p>Uppdrag</p></li>
        <li><p>Om oss</p></li>
        <li><p>Kontakt</p></li>
      </ul>
      </div>
        <img src="./images/fapa-logo.png" alt="fapa logo" />
      </div>
    )
  }
}

export default Header
