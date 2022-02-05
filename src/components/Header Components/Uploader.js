import uploadIcon from "../../assets/icons/upload.svg";
import AntiMohan from "./AntiMohan";
function Uploader() {
  return (
    <div className="uploaderContainer">
      <button className="uploader">
        <div className="uploaderContent">
          <img src={uploadIcon} alt="upload icon" />
          <p>UPLOAD</p>
        </div>
      </button>
      <AntiMohan />
    </div>
  );
}
export default Uploader;
