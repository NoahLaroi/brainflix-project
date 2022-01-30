import videoDetails from "../../data/video-details.json";
function VideoDescription() {
  console.log(videoDetails);
  return (
    <section className="videoDescription">
      <hr />
      <p>{videoDetails[0].description}</p>
      <hr />
    </section>
  );
}
export default VideoDescription;
