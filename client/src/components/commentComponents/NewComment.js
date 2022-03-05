import React from "react";
import AntiMohan from "../headerComponents/AntiMohan";
import Mohan from "../headerComponents/Mohan";
import PostedComments from "./PostedComments";

class NewComment extends React.Component {
  handleClick = (event) => {
    event.preventDefault();
  };
  render() {
    return (
      <section className="newCommentSectionContainer">
        <div className="newCommentSection">
          <div className="imageContainer">
            <Mohan />
            <AntiMohan />
          </div>
          <form className="textForm">
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
              <button className="commentButton" onClick={this.handleClick}>
                COMMENT
              </button>
            </div>
          </form>
        </div>
        <hr />
      </section>
    );
  }
}
export default NewComment;
