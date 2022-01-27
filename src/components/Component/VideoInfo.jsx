import videoInfo from '/Users/noahlatner/Documents/noah-latner-brainflix/src/data/videos.json' 
import videoDetails from '/Users/noahlatner/Documents/noah-latner-brainflix/src/data/video-details.json'
import likeIcon from '../../assets/icons/likes.svg'
import viewIcon from '../../assets/icons/views.svg'
function VideoInfo () {
    return (
        <section className='videoInfo'>
            <div className='dateAndAuthor'>
<p className='author'>{videoInfo[0].channel}</p>
<p className='date'> 07/11/2021</p>
            </div>
            <div className='viewsAndLikes'>
            <img className='icon viewIcon' src={viewIcon} alt='view eye'/>
<p className='views'>{videoDetails[0].views}</p>
<img  src={likeIcon} className='icon likeIcon' alt='like heart'/>
<p className='likes'>{videoDetails[0].likes}</p>
            </div>
            <div>

            </div>
        </section>
    )
}
export default VideoInfo