import React from "react";
import { Link, matchPath } from "react-router-dom";
export default function VideoListItem(props) {
  console.log(props.id);
  return (
    <Link to={"/" + props.id} className="videoLink">
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
