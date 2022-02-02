import React from "react";
import PostedComments from "../../components/Component/PostedComments";
import commentDetails from "../../data/video-details.json";

const Comments = (props) => {
  return props.names.map((name, index) => {
    return (
      <PostedComments
        name={name.name}
        date={name.date}
        comment={name.comment}
      />
    );
  });
};
export default Comments;
