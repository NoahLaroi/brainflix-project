import React from "react";
import Video from "../videoComponents/Video";
import PostedComments from "./PostedComments";

const CommentItems = (props) => {
  console.log(props.currentVideo);
  // const newComments = props.comments.filter((comments, currentVideo) => {
  //   console.log(props.currentVideo);
  //   if (comments === props.currentVideoId) {
  //     return comments === props.currentVideo[0];
  //   }
  // });
  console.log(props);
  return props.comments.map((comments, index) => {
    console.log(props.comments[0].name);
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
