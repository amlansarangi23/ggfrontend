const WorkerCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
    // object destructuring in props
  return (
    <button className="movie p-4 m-10 bg-slate-600 shadow-md shadow-black hover:bg-slate-700 border-2 border-slate-800 text-white" key={imdbID}>

        <p className="text-center">{Year}</p>
        <p className="text-center">{Type}</p>
        <h3 className="text-center">{Title}</h3>

    </button>
  );
}

export default WorkerCard;