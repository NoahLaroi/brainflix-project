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
app.use(express.json());
app.use(bodyParser.json());
const videos = require("./data/videos.json");
const videoDetails = require("./data/video-details.json");
const fs = require("fs");
const { Router } = require("express");

app.get("/", function (req, res) {
  res.send("Welcome to this API!");
});
app.get("/videos", cors(), function (req, res, next) {
  res.json(videoDetails);
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
app.use(function (req, res, next) {
  console.log("request", req.url, req.body, req.method);
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, x-token"
  );
  if (req.method === "OPTIONS") {
    res.end();
  } else {
    next();
  }
});

app.post("/videos", (req, res) => {
  console.log(req.body);
  const { title, description, image } = req.body;
  const newVideo = {
    id: uuidv4(),
    title: title,
    channel: "The Tread Factory",
    video: "Upload-video-preview.jpg",
    description: description,
    image: image,
    timestamp: new Date(),
    likes: 0,
    views: 0,
    comments: [{ name: "", date: "", comment: "" }],
  };
  console.log(videoDetails);
  const updatedVideoDetails = [...videoDetails, newVideo];
  fs.writeFile(
    "./data/video-details.json",
    JSON.stringify(updatedVideoDetails),
    (err) => {
      if (err) throw err;
    }
  );
});
