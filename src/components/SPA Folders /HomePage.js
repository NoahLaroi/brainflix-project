import React, { Component } from "react";
import Header from "../Header Components/Header";
import Video from "../Video Components/Video";
import VideoInfo from "../Video Components/VideoInfo";
import VideoDetails from "../../data/VideoDetails";
import AllVideos from "../../data/AllVideos";
import VideoDescription from "../Video Components/Description";
import NewComment from "../Comment Components/NewComment";
import Comments from "../Comment Components/CommentItems";
import NextVideoTitle from "../Next Video Components/NextVideoTitle";
import VideoList from "../Next Video Components/VideoList";
import axios from "axios";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
export default class HomePage extends Component {
  state = {
    videoDetails: VideoDetails,
    comments: [
      {
        name: VideoDetails[0].comments[0].name,
        date: new Date(
          VideoDetails[0].comments[0].timestamp
        ).toLocaleDateString("en-US"),
        comment: VideoDetails[0].comments[0].comment,
      },
      {
        name: VideoDetails[0].comments[1].name,
        date: new Date(
          VideoDetails[0].comments[1].timestamp
        ).toLocaleDateString("en-US"),
        comment: VideoDetails[0].comments[1].comment,
      },
      {
        name: VideoDetails[0].comments[2].name,
        date: new Date(
          VideoDetails[0].comments[2].timestamp
        ).toLocaleDateString("en-US"),
        comment: VideoDetails[0].comments[2].comment,
      },
    ],
    video: [
      {
        id: AllVideos[1].id,
        title: AllVideos[1].title,
        channel: AllVideos[1].channel,
        image: AllVideos[1].image,
      },
      {
        id: AllVideos[2].id,
        title: AllVideos[2].title,
        channel: AllVideos[2].channel,
        image: AllVideos[2].image,
      },
      {
        id: AllVideos[3].id,
        title: AllVideos[3].title,
        channel: AllVideos[3].channel,
        image: AllVideos[3].image,
      },
      {
        id: AllVideos[4].id,
        title: AllVideos[4].title,
        channel: AllVideos[4].channel,
        image: AllVideos[4].image,
      },
      {
        id: AllVideos[5].id,
        title: AllVideos[5].title,
        channel: AllVideos[5].channel,
        image: AllVideos[5].image,
      },
      {
        id: AllVideos[6].id,
        title: AllVideos[6].title,
        channel: AllVideos[6].channel,
        image: AllVideos[6].image,
      },
      {
        id: AllVideos[7].id,
        title: AllVideos[7].title,
        channel: AllVideos[7].channel,
        image: AllVideos[7].image,
      },
      {
        id: AllVideos[8].id,
        title: AllVideos[8].title,
        channel: AllVideos[8].channel,
        image: AllVideos[8].image,
      },
    ],
  };
  //In this render function I am rendering the Components to the root HTML element.
  render() {
    axios.get();
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Video />
          <div className="grandDivider">
            <div className="leftDivider">
              <VideoInfo />
              <VideoDescription />
              <NewComment />
              <Comments comments={this.state.comments} />
            </div>
            <div className="grandVideoContainer">
              <NextVideoTitle />
              <VideoList video={this.state.video} />
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
