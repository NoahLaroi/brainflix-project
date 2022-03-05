import img from "../../assets/logo/BrainFlix-logo.svg";
import { Link } from "react-router-dom";
export default function Logo() {
  return (
    <div className="logoContainer">
      <img src={img} className="logo" alt="logo" />
    </div>
  );
}
