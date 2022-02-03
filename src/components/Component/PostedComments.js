import Avatar from "./Avatar";

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
