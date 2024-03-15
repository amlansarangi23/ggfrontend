const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
    // object destructuring in props
  return (
    <div className="movie" key={imdbID}>
        <p className="text-center">{Year}</p>
        <p className="text-center">{Type}</p>
        <h3 className="text-center">{Title}</h3>

    </div>
  );
}

export default MovieCard;