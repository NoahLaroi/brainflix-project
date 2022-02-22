import React from "react";
import VideoListItem from "./VideoListItem";
//Takes in all videos and takes in id of current video
//Use JSX to make video, similar to comments
//Display every video except where the id matches the one that was passed in.

const Videos = (props) => {
  const newVideoArray = props.video.filter((video, index) => {
    // console.log(video.id, props.currentVideo);
    return video.id !== props.currentVideo;
  });

  // console.log(newVideoArray);
  // if (video.incldes(this.state.currentVideoId)) {
  //   return newVideoArray;
  // }
  return newVideoArray.map((video, index) => {
    //Filter props.video
    //Filter every video and remove the video that has the same ID as the current video

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
export default Videos;
