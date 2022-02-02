import React from "react";
import mojahed from "../../assets/images/Mohan-muruge.jpg";

function NewComment() {
  return (
    <section className="newCommentSectionContainer">
      <div className="newCommentSection">
        <div className="imageContainer">
          <img src={mojahed} alt="some random guy" className="mojahed" />
        </div>
        <form>
          <label>JOIN THE CONVERSATION</label>
          <textarea
            name="textBox"
            id=""
            cols="30"
            rows="6"
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
