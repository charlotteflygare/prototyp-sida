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
          <div className="item text">
            <h2>Sl</h2>
            <p></p>

            <p>Visuell identitet och trafikinformation<span>
               En färgsprakande och användarvänlig lösning som möter
               de höga krav på tillgänglighet som huvudstadens kollektivtrafik
               kräver. Nu finns till exempel all information både på svenska
               och engelska. Och den nya spårtrafikkartan är, enligt vår mening,
               ett konstverk i sig.</span>
            </p>
          </div>
            <div className="item image-sl">
              <img src="./images/sl.jpg" alt="SL" />
            </div>

            <div className="item image-sl-2">
              <img src="./images/SL3.jpg" alt="SL" />
            </div>




            <div className="item image-ob-logo">
              <img src="./images/o.jpg" alt="Orebro" />
            </div>

            <div className="item image-ob">
              <img src="./images/ob.jpg" alt="Orebro" />
            </div>

            <div className="item image-z">
              <img src="./images/Zoegas-DDB-2.gif" alt="Orebro" />
            </div>

            <div className="item image-z-2">
              <img src="./images/z.gif" alt="Orebro" />
            </div>

            <div className="item text-z">
              <h2>Zoega</h2>
c              <p>Zoégas Display font<span>
                 DDB Stockholm vände sig till oss för att formge
                 ett typsnitt exklusivt för kaffetillverkaren Zoégas.
                 Typsnittet ska användas som rubrik i bred exponering
                 på förpackningar, trycksaker och digitala applikationer
                 som appar och responsiv design.</span>
              </p>
            </div>


        </div>
      </div>
      <Footer />

      </div>

    )
  }
}
export default Startpage
