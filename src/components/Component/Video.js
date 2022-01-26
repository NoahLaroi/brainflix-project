import play from '../../assets/icons/play.svg'
import scrub from '../../assets/icons/scrub.svg'
import closeScreen from '../../assets/icons/close_fullscreen.svg'
import volume from '../../assets/icons/volume_up.svg'
const videoData = '../../data/video-details.json'
function Video () {
    return (
        <section className="videoSection">
          <div className='controls'>
<img src= {play} alt='play button' />
<img src= {scrub} alt = 'scrubber'/>
<img src={closeScreen} alt = 'screen expander'/>
<img src={volume} alt = 'volume button'
/>
          </div>  
        </section>
    )
}
export default Video