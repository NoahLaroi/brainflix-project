import PlayerButtons from "./PlayerButtons";
export default function Video(props) {
  return (
    <section className="videoSection">
      <video
        poster={props.currentVideo.image}
        controls
        className="videoDisplay"
      >
        {/* <PlayerButtons /> */}
      </video>
    </section>
  );
}
//never use this.props in a functional component.
