import { props } from "bluebird";
import allVidoes from "../../data/videos.json";
import React from "react";
import listOfVideos from "./VideoList";
//Needs Image, Title, and Channel
//This formats all three in a div and returns it
export default function VideoListItem(props) {
  return (
    <div>
      <img src={props.image} />
      <div>
        <h3>{props.title}</h3>
        <p>{props.channel}</p>
      </div>
    </div>
  );
}
