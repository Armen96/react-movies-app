import { useState, useEffect} from 'react';
import * as config from '../../config';

export const useHomeFetch = () => {
    const [state, setState] = useState({movies: []});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchMovies = async (endpoint) => {
        setLoading(true);
        setError(false);

        try {
            const result = await (await fetch(endpoint)).json();
            setState(prev => ({
                ...prev,
                movies: [...result.results],
                heroImage: prev.heroImage || result.results[0],
                currentPage: result.page,
                totalPages: result.total_pages
            }))
        } catch (e) {
            setError(e);
        }
        setLoading(false)
    };

    useEffect(() => {
        fetchMovies(`${config.API_URL}movie/popular?api_key=${config.API_KEY}`);
    }, []);

    return [
        {state, loading, error}, fetchMovies
    ]
};
