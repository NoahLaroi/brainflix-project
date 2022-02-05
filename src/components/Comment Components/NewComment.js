import React from "react";
import AntiMohan from "../Header Components/AntiMohan";
import Mohan from "../Header Components/Mohan";

function NewComment() {
  return (
    <section className="newCommentSectionContainer">
      <div className="newCommentSection">
        <div className="imageContainer">
          <Mohan />
          <AntiMohan />
        </div>
        <form>
          <div className="labelAndText">
            <label>JOIN THE CONVERSATION</label>
            <textarea
              name="textBox"
              id=""
              cols="30"
              rows="6"
              placeholder="Add a new comment"
              className="textBox"
            ></textarea>
          </div>
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
