import play from "../../assets/icons/play.svg";
import scrub from "../../assets/icons/scrub.svg";
import closeScreen from "../../assets/icons/close_fullscreen.svg";
import volume from "../../assets/icons/volume_up.svg";

export default function PlayerButtons() {
  return (
    <div className="playerButtons">
      <img src={play} alt="control playButton" />
      <img src={scrub} alt="control scrubber" />
      <img src={closeScreen} alt="control screenExpander" />
      <img src={volume} alt="control volumeButton" />
    </div>
  );
}
