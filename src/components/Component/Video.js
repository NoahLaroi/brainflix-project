import play from "../../assets/icons/play.svg";
import scrub from "../../assets/icons/scrub.svg";
import closeScreen from "../../assets/icons/close_fullscreen.svg";
import volume from "../../assets/icons/volume_up.svg";
import displayVideo from "../../data/videos.json";
function Video() {
  return (
    <section className="videoSection">
      <video poster={displayVideo[0].image} className="videoDisplay"></video>
      <div className="controls">
        {/* <img src= {play} alt='play button' />
<img src= {scrub} alt = 'scrubber'/>
<img src={closeScreen} alt = 'screen expander'/>
<img src={volume} alt = 'volume button'
/> */}
      </div>
    </section>
  );
}
export default Video;
