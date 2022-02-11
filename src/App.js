import HomePage from "./components/SPA Folders /HomePage";
import UploaderPage from "./components/Uploader Components/UploaderPage";
import "./styles/App.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import axios from "axios";
import React, { Component } from "react";
//Here in App.js I am setting the state for the comments and videos.

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <HomePage />;
          <UploaderPage />;
        </div>
      </BrowserRouter>
    );
  }
}
