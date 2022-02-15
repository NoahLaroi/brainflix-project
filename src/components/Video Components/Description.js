import videoDetails from "../../data/video-details.json";
function VideoDescription(props) {
  return (
    <section className="videoDescriptionSection">
      <hr />
      <p className="videoDescription">{videoDetails[0].description}</p>

      <p className="amountOfComments">3 Comments</p>
    </section>
  );
}
export default VideoDescription;
