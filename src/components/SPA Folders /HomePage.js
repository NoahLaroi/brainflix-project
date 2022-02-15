import React, { Component } from "react";
import Header from "../Header Components/Header";
import Video from "../Video Components/Video";
import VideoInfo from "../Video Components/VideoInfo";
import VideoDetails from "../../data/VideoDetails";
import AllVideos from "../../data/AllVideos";
import VideoDescription from "../Video Components/Description";
import NewComment from "../Comment Components/NewComment";
import CommentItems from "../Comment Components/CommentItems";
import NextVideoTitle from "../Next Video Components/NextVideoTitle";
import VideoList from "../Next Video Components/VideoList";
import axios from "axios";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
export default class HomePage extends Component {
  state = {
    currentVideoId: "84e96018-4022-434e-80bf-000ce4cd12b8",
    // videoDetails: VideoDetails,
    //1. pass right information 2. change video details state based on id.
    comments: [],
    videoImage: VideoDetails[0].image,
    nextVideo: VideoDetails,
  };

  //In this render function I am rendering the Components to the root HTML element.
  // When the component mounts, I want to automatically set the state of the comments
  // to match the current id of the video being displayed.
  componentDidMount() {
    console.log("component did mount");
    if ((this.currentVideoId = true)) {
      this.setState({ comments: VideoDetails[0].comments });
    }
    if ((this.video = true)) {
      console.log("picture here");
    }
  }
  componentDidMount() {
    console.log("component did mount");
  }

  componentWillUpdate() {}
  handleChange = (id) => {
    //I need the video Id of the video that I click on.
    //I need the Video.js, VideoListItems.js, and PostedComments.js to change when I click on the videos.
    this.setState({ currentVideoId: id });
  };
  render() {
    console.log(this.state.currentVideoId);
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Video image={this.state.videoImage} id={this.state.currentVideoId} />
          <div className="grandDivider">
            <div className="leftDivider">
              <VideoInfo />
              <VideoDescription />
              <NewComment />
              <CommentItems
                comments={this.state.comments}
                id={this.state.currentVideoId}
              />
            </div>
            <div className="grandVideoContainer">
              <NextVideoTitle />
              <VideoList
                video={this.state.nextVideo}
                handleChange={this.handleChange}
              />
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
