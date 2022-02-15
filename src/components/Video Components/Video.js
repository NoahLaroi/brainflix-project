import PlayerButtons from "./PlayerButtons";
export default function Video(props) {
  // console.log(props.image);
  return (
    <section className="videoSection">
      <video poster={props.image} controls className="videoDisplay">
        {/* <PlayerButtons /> */}
      </video>
    </section>
  );
}
