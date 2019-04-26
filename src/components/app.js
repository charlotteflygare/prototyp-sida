import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import Startpage from "./startpage/startpage.js"
import "./app.css"

class App extends React.Component {

  render() {
    return (
      <Router>
        <Route path="/" exact="true" component={Startpage}/>
      </Router>
    )
  }
}

export default App
