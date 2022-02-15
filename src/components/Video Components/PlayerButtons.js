import play from "../../assets/icons/play.svg";
import scrub from "../../assets/icons/scrub.svg";
import closeScreen from "../../assets/icons/close_fullscreen.svg";
import volume from "../../assets/icons/volume_up.svg";

export default function PlayerButtons() {
  return (
    <div className="playerButtons">
      <img src={play} alt="control playButton" className="icon play" />
      <img src={scrub} alt="control scrubber" className="icon scrub" />
      <img
        src={closeScreen}
        alt="control screenExpander"
        className="icon expand"
      />
      <img src={volume} alt="control volumeButton" className="icon volume" />
    </div>
  );
}
