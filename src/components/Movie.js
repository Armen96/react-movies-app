import React from "react";
import PropTypes from "prop-types";
import Navigation from "./elements/Navigation";
import MovieInfo from "./elements/MovieInfo";
import MovieInfoBar from "./elements/MovieInfoBar";
import Grid from "./elements/Grid";
import {useFetchMovie} from "./hooks/useFetchMovie";
import Spinner from "./elements/Spinner";
import Actor from "./elements/Actor";

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
