import img from "../../assets/logo/BrainFlix-logo.svg";
import Search from "./Search";
import Uploader from "./Uploader";
import Logo from "./Logo";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import HomePage from "../SPA Folders /HomePage";
import UploaderPage from "../SPA Folders /Uploader Components/UploaderPage";
function Header() {
  return (
    <section className="headerSection">
      <Logo />
      <Search />
      <Uploader />
    </section>
  );
}
export default Header;
