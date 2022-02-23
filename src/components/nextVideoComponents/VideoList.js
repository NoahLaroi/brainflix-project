import React from "react";
import VideoListItem from "./VideoListItem";
//Takes in all videos and takes in id of current video
//Use JSX to make video, similar to comments
//Display every video except where the id matches the one that was passed in.
const VideoList = (props) => {
  const newVideoArray = props.video.filter((video, index) => {
    return video.id !== props.currentVideo;
  });

  return newVideoArray.map((video, index) => {
    return (
      <VideoListItem
        handleChange={props.handleChange}
        id={video.id}
        image={video.image}
        title={video.title}
        channel={video.channel}
      />
    );
  });
};
export default VideoList;
