import img from "../../assets/logo/BrainFlix-logo.svg";
export default function Logo() {
  return (
    <div className="logoContainer">
      <img src={img} className="logo" alt="logo" />
    </div>
  );
}
