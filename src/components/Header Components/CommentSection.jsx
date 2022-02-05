import React from "react";
import PostedComments from "../Comment Components/PostedComments";

const Comments = (props) => {
  return props.comments.map((comments, index) => {
    return (
      <PostedComments
        name={comments.name}
        date={comments.date}
        comment={comments.comment}
      />
    );
  });
};
export default Comments;
