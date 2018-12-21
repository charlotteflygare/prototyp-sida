import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import "./hero.css"

class Hero extends React.Component {

  render() {
    return (
      <div className="hero-container">
      <video muted="muted" autoplay="autoplay" loop="loop" width="1366" height="768">
        <source src="./images/test.mp4" type="video/mp4" />
        Your browser does not support the video tag.
        </video>
      </div>
    )
  }
}

export default Hero
