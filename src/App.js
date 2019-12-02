import React, { Component } from 'react';

import Up_date from "./Tipos_ Averias/actualizacion_averia";
import Inicio_averia from "./Tipos_ Averias/inicio_averia";
import Fin from "./Tipos_ Averias/fin_averia";
import NavBar from "./navBar/NavBar";
import LSNavBar from "./navBar/LSNavBar";
import SignUp from "./Login_SignUp/SignUp";
import Login from "./Login_SignUp/login";
import "./App.css";
import "./index.css";
import "./index.js";

import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  state = { theme: null };

  resetTheme = evt => {
    evt.preventDefault();
    this.setState({ theme: null });
  };

  chooseTheme = (theme, evt) => {
    evt.preventDefault();
    this.setState({ theme });
  };

  render() {
    return (
      <div className="App">
         <BrowserRouter>
          <div>
            {
              this.state.loggedIn &&
               <div>
                  <NavBar />
              </div>
            }
            <NavBar />
{/* 
            <LSNavBar />
            <Login/> */}
            <Switch>
              <Route path="/SignUp" component={SignUp} />
              <Route path="/Login" component={Login} />
            </Switch>

            <Switch>
              <Route path="/Inicio_averia" component={Inicio_averia} />
              <Route path="/actualizacion_averia" component={Up_date} />
              <Route path="/fin_averia" component={Fin} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;