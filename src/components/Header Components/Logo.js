import img from "../../assets/logo/BrainFlix-logo.svg";
import { Link } from "react-router-dom";
export default function Logo() {
  return (
    <Link to="/" className="logoLink">
      <div className="logoContainer">
        <img src={img} className="logo" alt="logo" />
      </div>
    </Link>
  );
}
