import videoDetails from "../../data/video-details.json";
function VideoDescription(props) {
  return (
    <section className="videoDescriptionSection">
      <hr />
      <p className="videoDescription">{props.description}</p>
      <p className="amountOfComments">
        {props.currentVideo.comments.length} Comments
      </p>
    </section>
  );
}
export default VideoDescription;
