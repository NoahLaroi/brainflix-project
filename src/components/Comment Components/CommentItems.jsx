import React from "react";
import PostedComments from "./PostedComments";

const CommentItems = (props) => {
  // const videoComments = props.comments.filter((eachVideo) => {
  //   if (props.currentVideoId === eachVideo.id) {
  //     return eachVideo.comments;
  //   }
  // });
  // console.log(videoComments);
  return props.comments.map((comments, index) => {
    return (
      <>
        <PostedComments
          name={comments.name}
          date={comments.date}
          comment={comments.comment}
        />
      </>
    );
  });
};
export default CommentItems;
