import Avatar from "./Avatar";
function PostedComments(props) {
  console.log(props);
  return (
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
  );
}
export default PostedComments;
