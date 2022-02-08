import React from "react";
import VideoListItem from "./VideoListItem";
//Takes in all videos and takes in id of current video
//Use JSX to make video, similar to comments
//Display every video except where the id matches the one that was passed in.

const Videos = (props) => {
  return props.video.map((video, index) => {
    return (
      <VideoListItem
        // id={video.id}
        image={video.image}
        title={video.title}
        channel={video.channel}
      />
    );
  });
};
export default Videos;
