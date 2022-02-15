import { Component } from "react";
import React from "react";
import AntiMohan from "../Header Components/AntiMohan";
import Mohan from "../Header Components/Mohan";

class NewComment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
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
              <button className="commentButton">COMMENT</button>
            </div>
          </form>
        </div>
        <hr />
      </section>
    );
  }
}
export default NewComment;
