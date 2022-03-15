import axios from "axios";
import React from "react";
import publishIcon from "../../../assets/icons/publish.svg";

export default class UploaderPage extends React.Component {
  handleCancel = (event) => {
    event.preventDefault();
    alert("Upload Canceled! Press 'OK' to be Redirected!🙆🏾‍♂️");
    window.location.replace("/");
  };
  handlePublish = (event) => {
    setTimeout(
      () => alert("Congrats! Your content was uploaded! Awesome Video!"),
      5000
    );
    fetch("http://localhost:9000/videos", {
      method: "POST",
      body: JSON.stringify(this.state),
    }).then(function (res) {
      console.log(res);
      return res.JSON();
    });
    event.preventDefault();
  };

  render() {
    return (
      <section className="uploaderPage">
        <h1 className="uploadTitle">Upload Video</h1>
        <div className="uploadPageDivider">
          <div className="videoUploadContainer">
            <label>VIDEO THUMBNAIL</label>
            <div className="uploaderImageContainer" name="image"></div>
          </div>
          <form
            className="uploadForm"
            // method="POST"
            // action="http://localhost:9000/videos"
          >
            <label>TITLE YOUR VIDEO</label>
            <textarea
              name="title"
              className="titleInput"
              placeholder="Add a title to your video"
            ></textarea>
            <label>ADD A VIDEO DESCRIPTION</label>
            <textarea
              className="descriptionInput"
              name="description"
              placeholder="Add a description to your video"
            ></textarea>
            <div className="bottomButtonContainer">
              <button
                // type="submit"
                className="buttons publishButton"
                onClick={this.handlePublish}
              >
                <div className="publishContent">
                  <img src={publishIcon} alt="publish icon" />
                  <p>PUBLISH</p>
                </div>
              </button>
              <button
                className="buttons cancelButton"
                onClick={this.handleCancel}
              >
                CANCEL
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}
