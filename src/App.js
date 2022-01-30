import LogoHeader from '../src/components/Component/Header'
import SearchSection from '../src/components/Component/Search';
import Uploader from '../src/components/Component/Uploader'
import Video from '../src/components/Component/Video'
import VideoDescription from './components/Component/Description';
import VideoInfo from './components/Component/VideoInfo.js'
// import CommentInfo from '/Users/noahlatner/Documents/noah-latner-brainflix/src/components/Component/PostedComments.js'
import './styles/App.css'
// import'../src/components/Component/'
function App() {
  return (
<>
<LogoHeader/>
<SearchSection/>
<Uploader/>
<Video/>
<VideoInfo/>
<VideoDescription/>

</>
  );
};
export default App;
