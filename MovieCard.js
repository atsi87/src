import { movieData } from "./utils";
export default function MovieCard(props) {
  return (
    <>
      <div> test</div>
      <div className="MovieCard">
        <img className="MovieImage" src={props.posterUrl} />
        <p className="MovieTitle">{props.title}</p>
        <div className="MovieTypeWrapper">
          <p className="MovieType">{props.type}</p>
        </div>
      </div>
      <div>
        <MovieCard
          title={movieData.Title}
          posterUrl={movieData.Poster}
          type={movieData.Type}
        />
      </div>
    </>
  );
}
