import HomePage from "./components/SPA Folders /HomePage";
import UploaderPage from "./components/SPA Folders /Uploader Components/UploaderPage";
import "./styles/App.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import axios from "axios";
import React, { Component } from "react";
import Logo from "./components/Header Components/Logo";
//Here in App.js I am setting the state for the comments and videos.

export default class App extends Component {
  render() {
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logo} />
        <Route path="/upload" component={UploaderPage} />
      </Switch>
    </BrowserRouter>;
    return (
      <div>
        <HomePage />
        <UploaderPage />
      </div>
    );
  }
}
