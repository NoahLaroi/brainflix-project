import img from "../../assets/logo/BrainFlix-logo.svg";

function LogoHeader() {
  return (
    <section>
      <div className="logoContainer">
        <img src={img} classname="logo" alt="logo" />
      </div>
    </section>
  );
}
export default LogoHeader;
