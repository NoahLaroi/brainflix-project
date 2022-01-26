import videoDetails from '../../data/video-details.json'
function VideoDescription () {
    console.log(videoDetails);
    return (
        <section className='videoDescription'>
<p>{videoDetails[0].title}</p>
        </section>
    )
};
export default VideoDescription