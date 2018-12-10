import React from "react"
import { HashRouter as Router, Route } from "react-router-dom"
import "./footer.scss"

class Footer extends React.Component {

  render() {
    return (
      <div className="header-container">
        <img src="./images/fp.png" alt="fapa logo" />
        <ul>
          <li><p>Uppdrag</p></li>
          <li><p>Om oss</p></li>
          <li><p>Kontakt</p></li>

        </ul>
      </div>
    )
  }
}

export default Footer
