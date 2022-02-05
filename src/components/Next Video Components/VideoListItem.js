import React from "react";
export default function VideoListItem(props) {
  return (
    <div className="videoCardContainer">
      <img src={props.image} alt="videoCardImage" className="videoCardImage" />
      <div className="videoCardText">
        <h3 className="videoCardTitle">{props.title}</h3>
        <p className="videoCardChannel">{props.channel}</p>
      </div>
    </div>
  );
}
