import uploadIcon from "../../assets/icons/upload.svg";
function Uploader() {
  return (
    <button className="uploader">
      <div className="uploaderContent">
        <img src={uploadIcon} alt="upload icon" />
        <p>UPLOAD</p>
      </div>
    </button>
  );
}
export default Uploader;
