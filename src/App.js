import Header from "../src/components/Component/Header";
import Uploader from "../src/components/Component/Uploader";
import Video from "../src/components/Component/Video";
import VideoDescription from "./components/Component/Description";
import VideoInfo from "./components/Component/VideoInfo.js";
import NewComment from "./components/Component/NewComment";
import CommentInfo from "/Users/noahlatner/Documents/noah-latner-brainflix/src/components/Component/PostedComments.js";
import Comments from "./components/Component/CommentSection";
import VideoDetails from "./data/VideoDetails.js";
import allVideos from "./data/videos.json";
import VideoList from "./components/Component/VideoList";
import "./styles/App.css";

import React, { Component } from "react";

class App extends Component {
  state = {
    videoDetails: VideoDetails,
    currentVideoId: allVideos[0].id,
    comments: [
      {
        name: "Micheal Lyons",
        date: "08/09/2021",
        comment:
          "They BLEW the ROOF off at their last event, once everyone started figuring out they were going. This is still simply the greatest opening of an event I have EVER witnessed.",
      },
      {
        name: "Gary Wong",
        date: "07/15/2021",
        comment:
          "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
      },
      {
        name: "Theodore Duncan",
        date: "07/11/2021",
        comment:
          "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Every time I see him I feel instantly happy! He’s definitely my favorite ever",
      },
    ],
    video: [
      {
        id: "84e96018-4022-434e-80bf-000ce4cd12b8",
        title: "BMX Rampage: 2021 Highlights",
        chanel: "Red Cow",
        image: "https://i.imgur.com/l2Xfgpl.jpg",
      },
    ],
  };
  render() {
    console.log(this.state.VideoDetails);
    return (
      <div>
        <Header />
        <Video />
        <VideoInfo />
        <VideoDescription />
        <NewComment />
        <Comments names={this.state.comments} />
        {/* <VideoList
          allVideos={this.state.VideoDetails}
          currentId={this.state.currentVideoId}
        /> */}
      </div>
    );
  }
}
export default App;
