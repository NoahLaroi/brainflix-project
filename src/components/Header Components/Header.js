import img from "../../assets/logo/BrainFlix-logo.svg";
import Search from "./Search";
import Uploader from "./Uploader";
import { BrowserRouter, Route, Swutch, Link } from "react-router-dom";
function Header() {
  return (
    <section className="headerSection">
      <div className="logoContainer">
        <img src={img} className="logo" alt="logo" />
      </div>
      <Search />
      <Uploader />
    </section>
  );
}
export default Header;
