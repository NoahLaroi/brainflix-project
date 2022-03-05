import React, { Component } from "react";
import publishIcon from "../../../assets/icons/publish.svg";
import { useHistory } from "react-router";

export default class UploaderPage extends React.Component {
  handleCancel = (event) => {
    event.preventDefault();
    alert("Sweet Deal! This Doesn't Work Anyway! 🙆🏾‍♂️");
  };
  handlePublish = (event) => {
    event.preventDefault();
    alert("Congrats! Your content was uploaded! Awesome Video!");
  };
  render() {
    return (
      <section className="uploaderPage">
        <h1 className="uploadTitle">Upload Video</h1>
        <div className="uploadPageDivider">
          <div className="videoUploadContainer">
            <label>VIDEO THUMBNAIL</label>
            <div className="uploaderImageContainer"></div>
          </div>
          <form className="uploadForm">
            <label>TITLE YOUR VIDEO</label>
            <textarea
              className="titleInput"
              placeholder="Add a title to your video"
            ></textarea>
            <label>ADD A VIDEO DESCRIPTION</label>
            <textarea
              className="descriptionInput"
              placeholder="Add a description to your video"
            ></textarea>
          </form>
        </div>
        <div className="bottomButtonContainer">
          <button
            className="buttons publishButton"
            onClick={this.handlePublish}
          >
            <div className="publishContent">
              <img src={publishIcon} alt="publish icon" />
              <p>PUBLISH</p>
            </div>
          </button>
          <button className="buttons cancelButton" onClick={this.handleCancel}>
            CANCEL
          </button>
        </div>
      </section>
    );
  }
}
