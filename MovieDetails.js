export default function MovieDetails(props) {
    // const [movies, setMovies] = useState([]);
    // const [error, setError] = useState(null);

    return (
        <>
        <div className="MovieDetail">
            <img className="mMovieImages" src={props.posterUrl} />
            <p className="MovieTitle">{props.Title}</p>
            <p className="MovieRated">{props.Rated}</p>
            <div className="MovieRunTime">{props.RunTime}</div>
            <p className="MovieGener">{props.Gener}</p>
            <div className="MoviePlot">{props.Plot}</div>
            <p className="MovieActors">{props.Actors}</p>
            <div className="MovieRating">{ props.Rating}</div>
        </div>

        <div>
                <MovieDetails
                    Title={props.Title}
                    PosterUrl={props.PosterUrl}
                    RunTime={props.RunTime}
                    Rated={props.Rated}
                    Gener={props.Gener}
                    Plot={props.Plot}
                    Actors={props.Actors}
                    Rating={props.Rating}
                />
            </div>
            </>
)
};