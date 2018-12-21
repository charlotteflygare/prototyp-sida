import React from "react"
import { HashRouter as Router, Route } from "react-router-dom"
import Header from "../header/header.js"
import Hero from "../hero/hero.js"
import Footer from "../footer/footer.js"
import "./startpage.css"

class Startpage extends React.Component {

  render() {
    return (
      <div>
          <Hero />
          <div className="wrapper">

          <Header />
          <div className="grid-container">
            <div className="item1">
              <div className="item1-image">
                <img src="./images/sl.jpg" alt="SL" />
              </div>
            </div>

            <div className="item2">
              <h2>SL Skyltsystem och wayfinding</h2>
              <p> Att hitta rätt i SL-systemet kan vara knepigt.
              Vi har hittat mer än tjugo olika grafiska system i
              tunnelbana, pendeltåg, spårvagn, buss och båt. Inget
              är på engelska och inget följer SL:s visuella identitet.</p>
            </div>
            <div className="item3">
              <img src="./images/ob.jpg" alt="SL" />
            </div>




        </div>
      </div>
      </div>

    )
  }
}
export default Startpage
