import PlayerButtons from "./PlayerButtons";
export default function Video(props) {
  // console.log(props.currentVideo[0].image);
  return (
    <section className="videoSection">
      <video
        poster={props.currentVideo[0].image}
        controls
        className="videoDisplay"
      >
        {/* <PlayerButtons /> */}
      </video>
    </section>
  );
}
//never use this.props in a functional component.
