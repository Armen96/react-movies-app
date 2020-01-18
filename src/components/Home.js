import React, { useState, useEffect } from "react";
import HeroImage from "./elements/HeroImage";
import SearchBar from "./elements/SearchBar";
import Grid from "./elements/Grid";
import MovieThumb from "./elements/MovieThumb";
import LoadMoreBtn from "./elements/LoadMoreBtn";
import Spinner from "./elements/Spinner";
import {useHomeFetch} from './hooks/useHomeFetch';
import * as config from '../config';
import NoImage from './images/no_image.jpg';

const Home = () => {
    const [
        { state: { movies, currentPage, totalPages, heroImage }, loading, error}, fetchMovies
    ] = useHomeFetch();
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = search => {
        const endpoint = search ? config.SEARCH_BASE_URL + search : config.POPULAR_BASE_URL;

        setSearchTerm(search);
        fetchMovies(endpoint);
    };

    const loadMoreMovies = () => {
        const searchEndpoint = `${config.SEARCH_BASE_URL}${searchTerm}&page=${currentPage + 1}`;
        const popularEndpoint = `${config.POPULAR_BASE_URL}&page=${currentPage + 1}`;

        const endpoint = searchTerm ? searchEndpoint : popularEndpoint;
        fetchMovies(endpoint);
    };

    if (error) return <div>Something went wrong ...</div>;
    if (!movies[0]) return <Spinner />;

    return (
        <>
            {!searchTerm && (
                <HeroImage
                    image={`${config.IMAGE_BASE_URL}${config.BACKDROP_SIZE}${heroImage.backdrop_path}`}
                    title={heroImage.original_title}
                    text={heroImage.overview}
                />
            )}
            <SearchBar callback={searchMovies} />
            <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
                {movies.map(movie => (
                    <MovieThumb
                        key={movie.id}
                        clickable
                        image={
                            movie.poster_path
                                ? config.IMAGE_BASE_URL + config.POSTER_SIZE + movie.poster_path
                                : NoImage
                        }
                        movieId={movie.id}
                        movieName={movie.original_title}
                    />
                ))}
            </Grid>
            {loading && <Spinner />}
            {currentPage < totalPages && !loading && (
                <LoadMoreBtn text="Load More" callback={loadMoreMovies} />
            )}
        </>
    )
};

export default Home;
