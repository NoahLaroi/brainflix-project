import React from "react";
import Mohan from "./Mohan";

function NewComment() {
  return (
    <section className="newCommentSectionContainer">
      <div className="newCommentSection">
        <div className="imageContainer">
          <Mohan />
        </div>
        <form>
          <label>JOIN THE CONVERSATION</label>
          <textarea
            name="textBox"
            id=""
            cols="30"
            rows="3"
            placeholder="Add a new comment"
            className="textBox"
          ></textarea>
          <div className="buttonContainer">
            <button className="commentButton">COMMENT</button>
          </div>
        </form>
      </div>
      <hr />
    </section>
  );
}
export default NewComment;
