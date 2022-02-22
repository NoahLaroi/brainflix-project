import React from "react";
import { Link } from "react-router-dom";
export default function VideoListItem(props) {
  return (
    <Link className="videoLink">
      <div
        className="videoCardContainer"
        onClick={() => props.handleChange(props.id)}
      >
        <img
          src={props.image}
          alt="videoCardImage"
          className="videoCardImage"
        />
        <div className="videoCardText">
          <h3 className="videoCardTitle">{props.title}</h3>
          <p className="videoCardChannel">{props.channel}</p>
        </div>
      </div>
    </Link>
  );
}
