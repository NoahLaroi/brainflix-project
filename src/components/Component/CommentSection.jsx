import React from "react";
import PostedComments from "../../components/Component/PostedComments";
import CommentDetails from "../../data/video-details.json";

const Comments = (props) => {
  return props.names.map((name, index) => {
    return <PostedComments name={name.name} />;
  });
  //   return props.comment.map((comment, index) => {
  //     return <PostedComments comment={comment.comment} />;
  //   });
};
export default Comments;
