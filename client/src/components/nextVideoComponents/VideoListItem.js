import React from "react";
import { Link, matchPath, useParams } from "react-router-dom";
export default function VideoListItem(props) {
  //For copy and pasting/testing purposes (lazy way without useParams) {`/${props.id}`}, (useParams way){props.match.params.id}
  return (
    <Link to={`/${props.id}`} className="videoLink">
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
