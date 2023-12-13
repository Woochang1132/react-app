import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movieDetail, setMovieDetail] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log("json >>", json);
    setMovieDetail(json);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Movie
          id={movieDetail.data.movie.id}
          coverImage={movieDetail.data.movie.medium_cover_image}
          title={movieDetail.data.movie.title}
          summary={movieDetail.data.movie.slug}
          genres={movieDetail.data.movie.genres}
        />
      )}
    </div>
  );
}
export default Detail;
