import React from "react";
import Comments from "./CommentItems";
import PostedComments from "./PostedComments";

function CommentSection() {
  return (
    <section className="commentSection">
      <PostedComments />
    </section>
  );
}
