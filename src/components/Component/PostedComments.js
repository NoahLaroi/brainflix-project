import commentInfo from '../../data/video-details.json'

function CommentInfo () {
    return (
        <div>
        <p>{commentInfo[0].name}</p>
        <p>{commentInfo[0].comments}</p>
        </div>
    )
};
export default CommentInfo