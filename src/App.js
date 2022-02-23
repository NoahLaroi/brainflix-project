// import HomePage from "./components/SPA_Folders /HomePage";
import UploaderPage from "./components/SPAComponents/uploaderComponent/UploaderPage";
import Video from "./components/videoComponents/Video";
import VideoInfo from "./components/videoComponents/VideoInfo";
import VideoDetails from "./data/VideoDetails";
import AllVideos from "./data/AllVideos";
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

//Here in App.js I am setting the state for the comments and videos.

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/:id" component={HomePage} />
        <Route path="/upload" component={UploaderPage} />
      </Switch>
    </BrowserRouter>
  );
}

class HomePage extends Component {
  //1. pass right information 2. change video details state based on id.
  state = {
    currentVideoId: "84e96018-4022-434e-80bf-000ce4cd12b8",
    currentVideoInfo: VideoDetails,
    nextVideo: AllVideos,
  };

  componentDidMount() {
    console.log("component did mount");
    // this.setState({ currentVideoId: "84e96018-4022-434e-80bf-000ce4cd12b8" });
    let curVid = axios.get("https://project-2-api.herokuapp.com/video/:id");
  }

  //Allows me to get the current video Id of the Id that I click on.
  handleChange = (id) => {
    this.setState({ currentVideoId: id });
  };
  render() {
    const currentVideo = this.state.currentVideoInfo.filter((video) => {
      return video.id === this.state.currentVideoId;
    });
    return (
      <div>
        <Video id={this.state.currentVideoId} currentVideo={currentVideo} />
        <div className="grandDivider">
          <div className="leftDivider">
            <VideoInfo
              likes={currentVideo[0].likes}
              views={currentVideo[0].views}
              channel={currentVideo[0].channel}
              date={currentVideo[0].date}
            />
            <Description description={currentVideo[0].description} />
            <NewComment />
            <CommentItems
              comments={currentVideo[0].comments}
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
      </div>
    );
  }
}
