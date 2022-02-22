import img from "../../assets/logo/BrainFlix-logo.svg";
import Search from "./Search";
import Uploader from "./Uploader";
import Logo from "./Logo";
import { Link } from "react-router-dom";
function Header() {
  return (
    <section className="headerSection">
      <Link to="/" className="logoLink">
        <Logo />
      </Link>
      <Search />
      <Uploader />
    </section>
  );
}
export default Header;
