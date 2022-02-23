import videoInfo from "/Users/noahlatner/Documents/noah-latner-brainflix/src/data/videos.json";
import videoDetails from "/Users/noahlatner/Documents/noah-latner-brainflix/src/data/video-details.json";
import likeIcon from "../../assets/icons/likes.svg";
import viewIcon from "../../assets/icons/views.svg";
function VideoInfo(props) {
  return (
    <div className="bigContainer">
      <p className="videoTitle">{props.title}</p>
      <hr />
      <section className="videoInfo">
        <div className="dateAndAuthor">
          <p className="author">{props.channel}</p>
          <p className="date"> 07/11/2021</p>
        </div>
        <section className="viewsAndLikes">
          <div className="viewContainer">
            <img className="icon viewIcon" src={viewIcon} alt="view eye" />
            <p className="views">{props.views}</p>
          </div>
          <div className="likeContainer">
            <img src={likeIcon} className="icon likeIcon" alt="like heart" />
            <p className="likes">{props.likes}</p>
          </div>
        </section>
      </section>
    </div>
  );
}
export default VideoInfo;
