import likeIcon from "../../assets/icons/likes.svg";
import viewIcon from "../../assets/icons/views.svg";
function VideoInfo(props) {
  return (
    <div className="bigContainer">
      <p className="videoTitle">{props.currentVideo.title}</p>
      <hr />
      <section className="videoInfo">
        <div className="dateAndAuthor">
          <p className="author">{props.currentVideo.channel}</p>
          <p className="date"> 07/11/2021</p>
        </div>
        <section className="viewsAndLikes">
          <div className="viewContainer">
            <img className="icon viewIcon" src={viewIcon} alt="view eye" />
            <p className="views">{props.currentVideo.views}</p>
          </div>
          <div className="likeContainer">
            <img src={likeIcon} className="icon likeIcon" alt="like heart" />
            <p className="likes">{props.currentVideo.likes}</p>
          </div>
        </section>
      </section>
    </div>
  );
}
export default VideoInfo;
