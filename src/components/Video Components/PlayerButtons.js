import play from "../../assets/icons/play.svg";
import scrub from "../../assets/icons/scrub.svg";
import closeScreen from "../../assets/icons/close_fullscreen.svg";
import volume from "../../assets/icons/volume_up.svg";

export default function PlayerButtons() {
  return (
    <div className="controls">
      <img src={play} alt="play button" />
      <img src={scrub} alt="scrubber" />
      <img src={closeScreen} alt="screen expander" />
      <img src={volume} alt="volume button" />
    </div>
  );
}
