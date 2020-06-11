import React from "react";
import PropTypes from "prop-types";
import Navigation from "../shared/elements/Navigation";
import MovieInfo from "../shared/elements/MovieInfo";
import MovieInfoBar from "../shared/elements/MovieInfoBar";
import Grid from "../shared/elements/Grid";
import {useFetchMovie} from "../hooks/useFetchMovie";
import Spinner from "../shared/elements/Spinner";
import Actor from "../shared/elements/Actor";

const Movie = ({movieId}) => {
    const [movie, loading, error] = useFetchMovie(movieId);

    if (error) return <div>Something went wrong ...</div>;
    if (loading) return <Spinner />;

    return (
       <>
           <Navigation movie={movie.original_title} />
           <MovieInfo movie={movie} />
           <MovieInfoBar
               time={movie.runtime}
               budget={movie.budget}
               revenue={movie.revenue}
           />
           <Grid header="Actors">
               {movie.actors.map(actor => (
                   <Actor key={actor.credit_id} actor={actor} />
               ))}
           </Grid>
       </>
    );
};

Movie.prototype = {
    movieId: PropTypes.number,
};

export default Movie;
