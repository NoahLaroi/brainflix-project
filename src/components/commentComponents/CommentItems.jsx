import React from "react";
import PostedComments from "./PostedComments";

const CommentItems = (props) => {
  return props.comments.map((comments, index) => {
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
