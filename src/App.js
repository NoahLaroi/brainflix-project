import HomePage from "./components/SPA_Folders /HomePage";
import UploaderPage from "./components/SPA_Folders /uploaderComponent/UploaderPage";
import Header from "./components/headerComponents/Header";
import "./styles/App.css";
import "./styles/mobile.css";
import "./styles/tablet.css";
import "./styles/desktop.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import axios from "axios";
import React, { Component } from "react";
//Here in App.js I am setting the state for the comments and videos.

export default function App() {
  function videoId(props) {
    return <div>props.match.params.videoId</div>;
  }
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        {/* <Route path="/:userId" component={HomePage} /> */}
        <Route path="/upload" component={UploaderPage} />
      </Switch>
    </BrowserRouter>
  );
}
