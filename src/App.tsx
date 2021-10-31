import React from 'react';
import './assets/styles/main.scss'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LibraryApp from "./LibraryApp";
import AboutMe from "./components/AboutMe";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";


function App() {
    return (
        <React.Fragment>
          <Router>
            <NavBar/>
            <Switch>
              <Route exact path="/" component={LibraryApp} />
              <Route exact path="/about-me" component={AboutMe} />
            </Switch>
            <Footer/>
          </Router>
        </React.Fragment>
    );
}

export default App;
