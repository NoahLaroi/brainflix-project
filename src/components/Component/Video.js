import displayVideo from "../../data/videos.json";
import PlayerButtons from "./PlayerButtons";
function Video() {
  return (
    <section className="videoSection">
      <video poster={displayVideo[0].image} className="videoDisplay"></video>
    </section>
  );
}
export default Video;
