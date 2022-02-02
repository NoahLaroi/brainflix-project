import LogoHeader from "../src/components/Component/Header";
import SearchSection from "../src/components/Component/Search";
import Uploader from "../src/components/Component/Uploader";
import Video from "../src/components/Component/Video";
import VideoDescription from "./components/Component/Description";
import VideoInfo from "./components/Component/VideoInfo.js";
import NewComment from "./components/Component/NewComment";
import CommentInfo from "/Users/noahlatner/Documents/noah-latner-brainflix/src/components/Component/PostedComments.js";
import CommentSection from "./components/Component/CommentSection";
import VideoDetails from "./data/VideoDetails.js";
import "./styles/App.css";

import React, { Component } from "react";

export default class App extends Component {
  state = {
    videoDetails: VideoDetails,
    names: [
      { name: "Micheal Lyons" },
      { name: "Gary Wong" },
      { name: "Theodore Duncan" },
    ],
    comments: [
      { comment: "Hi yall" },
      { comment: "Hello" },
      { comment: "Hola" },
    ],
  };
  render() {
    console.log(this.state.VideoDetails);
    return (
      <div>
        <LogoHeader />
        <SearchSection />
        <Uploader />
        <Video />
        <VideoInfo />
        <VideoDescription />
        <NewComment />
        <CommentSection
          names={this.state.names}
          comments={this.state.comments}
        />
      </div>
    );
  }
}
