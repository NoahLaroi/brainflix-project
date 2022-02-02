import commentInfo from "/Users/noahlatner/Documents/noah-latner-brainflix/src/data/video-details.json";
//Set state on a higher component (App), assign video info to the state
import Comments from "../../components/Component/CommentSection.jsx";

function PostedComments(props) {
  return (
    <section className="PostedCommentSection">
      <p>{props.name}</p>
      <p>{props.comment}</p>
    </section>
  );
}
export default PostedComments;
