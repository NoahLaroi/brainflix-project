// import HomePage from "./components/SPA_Folders /HomePage";
import UploaderPage from "./components/SPAComponents/uploaderComponent/UploaderPage";
import Video from "./components/videoComponents/Video";
import VideoInfo from "./components/videoComponents/VideoInfo";
import Description from "./components/videoComponents/Description";
import NewComment from "./components/commentComponents/NewComment";
import CommentItems from "./components/commentComponents/CommentItems";
import NextVideoTitle from "./components/nextVideoComponents/NextVideoTitle";
import VideoList from "./components/nextVideoComponents/VideoList";
import Header from "./components/headerComponents/Header";
import "./styles/App.css";
import "./styles/mobile.css";
import "./styles/tablet.css";
import "./styles/desktop.css";
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  matchPath,
} from "react-router-dom";
import axios from "axios";
import React, { Component } from "react";
import VideoListItem from "./components/nextVideoComponents/VideoListItem";
//Curent Things that I have to do: 1. Switch up comments to match currentVideo. 2. Dynamic Links in react-dom-router. 3. Axios request the API
const API_KEY = "f3a0830a-f1dd-4ad8-91f6-eebaae1aa1ec";
//Here in App.js I am setting the state for the comments and videos.

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/upload" component={UploaderPage} />
        <Route path="/" exact component={HomePage} />
        <Route path="/:id" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

class HomePage extends Component {
  //1. pass right information 2. change video details state based on id.
  //Video Id ready for copy and pasting: 84e96018-4022-434e-80bf-000ce4cd12b8
  state = {
    currentVideoId: "",
    currentVideoInfo: {
      likes: "",
      comments: [{ name: "", date: "", comment: "" }],
      views: "",
      channel: "",
      title: "",
    },
    isLoading: false,
    nextVideo: [],
  };

  componentDidMount() {
    console.log("hi bud");
    this.setState({ isLoading: true });
    axios
      .get(`https://project-2-api.herokuapp.com/videos/?api_key=${API_KEY}`)
      .then((res) => {
        this.setState({
          nextVideo: res.data,
          currentVideoId: res.data[0].id,
        });
      });
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentVideoId !== prevState.currentVideoId) {
      axios
        .get(
          `https://project-2-api.herokuapp.com/videos/${this.state.currentVideoId}?api_key=${API_KEY}`
        )
        .then((res) => {
          this.setState({ currentVideoInfo: res.data });
        });
      // } else if (this.state.currentVideoId === prevState.currentVideoId) {
      //   this.state.nextVideo.length > 0 &&
      //     this.setState({ currentVideoId: this.state.nextVideo[0].id });
      // this.setState({ currentVideoId: this.state.nextVideo[0].id });
    }
  }

  //Allows me to get the current video Id of the Id that I click on.
  handleChange = (id) => {
    this.setState({ currentVideoId: id });
  };
  render() {
    return (
      <>
        {this.state.isLoading ? (
          <div className="grandDivider">
            <Video
              id={this.state.currentVideoId}
              currentVideo={this.state.currentVideoInfo}
            />
            <div className="leftDivider">
              <VideoInfo currentVideo={this.state.currentVideoInfo} />
              <Description
                description={this.state.currentVideoInfo.description}
                currentVideo={this.state.currentVideoInfo}
              />
              <NewComment />
              <CommentItems
                comments={this.state.currentVideoInfo.comments}
                currentVideo={this.state.currentVideoId}
              />
            </div>
            <div className="grandVideoContainer">
              <NextVideoTitle />
              <VideoList
                video={this.state.nextVideo}
                handleChange={this.handleChange}
                currentVideo={this.state.currentVideoId}
              />
            </div>
          </div>
        ) : (
          <h1>You played yourself.</h1>
        )}
      </>
    );
  }
}
