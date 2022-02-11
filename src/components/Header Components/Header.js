import img from "../../assets/logo/BrainFlix-logo.svg";
import Search from "./Search";
import Uploader from "./Uploader";
import Logo from "./Logo";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import HomePage from "../SPA Folders /HomePage";
import UploaderPage from "../Uploader Components/UploaderPage";
function Header() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Logo} />
          <Route path="/upload" component={UploaderPage} />
        </Switch>
      </BrowserRouter>
      <section className="headerSection">
        <Link to="/" className="logoLink">
          <Logo />
        </Link>
        <Search />
        <Link to="/upload" className="uploadLink">
          <Uploader />
        </Link>
      </section>
    </>
  );
}
export default Header;
