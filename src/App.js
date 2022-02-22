// import HomePage from "./components/SPA_Folders /HomePage";
import UploaderPage from "./components/SPA_Folders /uploaderComponent/UploaderPage";
import Video from "./components/videoComponents/Video";
import VideoInfo from "./components/videoComponents/VideoInfo";
import VideoDetails from "./data/VideoDetails";
import AllVideos from "./data/AllVideos";
import VideoDescription from "./components/videoComponents/Description";
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

//Here in App.js I am setting the state for the comments and videos.

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
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

  //In this render function I am rendering the Components to the root HTML element.
  // When the component mounts, I want to automatically set the state of the comments
  // to match the current id of the video being displayed.
  componentDidMount() {
    console.log("component did mount");
    // if ((this.currentVideoId = true)) {
    //   this.setState({ comments: VideoDetails[0].comments });
    // }
  }

  componentWillUpdate() {}
  handleChange = (id) => {
    //I need the video Id of the video that I click on.
    //I need the Video.js, VideoListItems.js, and PostedComments.js to change when I click on the videos.
    this.setState({ currentVideoId: id });
  };
  render() {
    const currentVideo = AllVideos.filter((video) => {
      return video.id === this.state.currentVideoId;
    });
    return (
      <div>
        <Video id={this.state.currentVideoId} currentVideo={currentVideo} />
        <div className="grandDivider">
          <div className="leftDivider">
            <VideoInfo />
            <VideoDescription />
            <NewComment />
            <CommentItems
              comments={this.state.currentVideoInfo[0].comments}
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
