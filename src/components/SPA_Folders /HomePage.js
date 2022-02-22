import React, { Component } from "react";
import Header from "../headerComponents/Header";
import Video from "../videoComponents/Video";
import VideoInfo from "../videoComponents/VideoInfo";
import VideoDetails from "../../data/VideoDetails";
import AllVideos from "../../data/AllVideos";
import VideoDescription from "../videoComponents/Description";
import NewComment from "../commentComponents/NewComment";
import CommentItems from "../commentComponents/CommentItems";
import NextVideoTitle from "../nextVideoComponents/NextVideoTitle";
import VideoList from "../nextVideoComponents/VideoList";
import axios from "axios";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
export default class HomePage extends Component {
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
    // const currentComments = VideoDetails.filter((comments, index) => {
    //   return comments === this.state.currentVideoId;
    // });
    // const currentLikes = VideoDetails.filter((likes) => {
    //   return likes === currentVideo;
    // });
    // console.log(currentVideo);
    // console.log(currentComments);
    return (
      <BrowserRouter>
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
      </BrowserRouter>
    );
  }
}
