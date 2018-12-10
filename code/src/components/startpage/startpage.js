import React from "react"
import { HashRouter as Router, Route } from "react-router-dom"
import Header from "../header/header.js"
import Hero from "../hero/hero.js"
import Footer from "../footer/footer.js"
import "./startpage.scss"

class Startpage extends React.Component {

  render() {
    return (
      <div className="startpage-container">
        <Hero />
        <Header />
      </div>
    )
  }
}

export default Startpage
