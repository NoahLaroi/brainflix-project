const express = require("express");
app = express();
const cors = require("cors");
require("dotenv").config();
const { PORT, BACKEND_URL } = process.env;
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const { v4: uuidv4 } = require("uuid");
app.listen(9000, function () {});
app.use(cors());
const videos = require("./data/videos.json");
const videoDetails = require("./data/video-details.json");
const fs = require("fs");
const { Router } = require("express");

// const newVideoDetails = [
//   {
//     id: "",
//     title: "",
//     channel: "The Tread Factory",
//     video: "Upload-video-preview.jpg",
//   },
// ];
app.get("/", function (req, res) {
  res.send("Welcome to this API!");
});
app.get("/videos", cors(), function (req, res, next) {
  res.json(videos);
  next();
});
//GET /videos/:id that responds with an object containing
//the details of the video with an id of :id.
//1. Find video with a method.
//2. Console log it and send it back if it's correct/validate it.
//3. Implement res.json in order to display your data in object form.
app.get("/videos/:id", cors(), function (req, res, next) {
  const newDetails = videoDetails.filter((videoItems) => {
    return videoItems.id === req.params.id;
  });
  res.json(newDetails);
  next();
});

//In case this would be needed for something.
app.get("/videodetails", function (req, res) {
  res.json(videoDetails);
});
// app.post("/videos", urlencodedParser, function (req, res) {
//   console.log("hello world");
//   console.log(req.body.title);
//   res.send(request.body);
//   //create a new object of empty value types, add to videos list,
//   //create a video Id
// });
app.post("/videos", (req, res) => {
  console.log(req);
  const title = req.body;
  const description = req.body;
  fs.readFile("./data/video-details.json", "utf-8", (err, data) => {
    if (err) throw err;
    videoDetails.push({
      id: uuidv4(),
      title: title,
      channel: "The Tread Factory",
      video: "Upload-video-preview.jpg",
      description: description,
      timestamp: Date.now(),
      likes: 0,
      views: 0,
      comment: [{ name: "", date: "", comment: "" }],
    });
  });
  const newVideo = JSON.stringify(videoDetails);

  fs.writeFile("./data/video-details.json", newVideo, (err) => {
    if (err) throw err;
  });
});
