import commentInfo from "/Users/noahlatner/Documents/noah-latner-brainflix/src/data/video-details.json";
//Set state on a higher component (App), assign video info to the state
import Comments from "../../components/Component/CommentSection.jsx";
import Avatar from "./Avatar";
//Avatar Component place it here and position it, it also needs a date
//  flexbox to get the look right
function PostedComments(props) {
  return (
    <section className="commentSection">
      <div className="postedCommentBox">
        <div className="avatarContainer">
          <Avatar />
        </div>
        <div className="textContainer">
          <span className="nameAndDate">
            <p className="nameText">{props.name}</p>
            <p className="dateText">{props.date}</p>
          </span>
          <p className="commentText">{props.comment}</p>
          <hr />
        </div>
      </div>
    </section>
  );
}
export default PostedComments;
