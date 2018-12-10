import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import "./hero.css"

class Hero extends React.Component {

  render() {
    return (
      <div className="hero-container">
        <img src="./images/skissbild_fapa.png" alt="fapa" />
      </div>
    )
  }
}

export default Hero
