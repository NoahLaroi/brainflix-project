import React from "react";
import Video from "../Video Components/Video";
import PostedComments from "./PostedComments";

const CommentItems = (props) => {
  // console.log(props);
  // const newComments = props.comments.filter((comments, currentVideo) => {
  //   console.log(comments);
  //   return comments === props.currentVideo;
  // });
  // console.log(newComments);
  return props.comments.map((comments, index) => {
    // console.log(props.comments.name);
    return (
      <PostedComments
        currentVideoId={props.currentVideoId}
        name={comments.name}
        date={comments.date}
        comment={comments.comment}
      />
    );
  });
};
export default CommentItems;
