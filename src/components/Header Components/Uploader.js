import uploadIcon from "../../assets/icons/upload.svg";
import AntiMohan from "./AntiMohan";
import { Link } from "react-router-dom";
function Uploader() {
  return (
    <Link to="/upload" className="uploadLink">
      <div className="uploaderContainer">
        <button className="uploader">
          <div className="uploaderContent">
            <img src={uploadIcon} alt="upload icon" />
            <p>UPLOAD</p>
          </div>
        </button>
        <AntiMohan />
      </div>
    </Link>
  );
}
export default Uploader;
