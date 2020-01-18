import {useState, useEffect, useCallback} from 'react';
import * as config from "../../config";

export const useFetchMovie = (movieId) => {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchData = useCallback(async () => {
        setError(false);
        setLoading(true);

        try {
            const endpoint = `${config.API_URL}movie/${movieId}?api_key=${config.API_KEY}`;
            const result = await (await fetch(endpoint)).json();

            const creditsEndpoint = `${config.API_URL}movie/${movieId}/credits?api_key=${config.API_KEY}`;
            const creditsResult = await (await fetch(creditsEndpoint)).json();
            const directors = creditsResult.crew.filter(
                member => member.job === 'Director'
            );

            setState({
                ...result,
                actors: creditsResult.cast,
                directors,
            })

        } catch (error) {
            setError(true);
        }
        setLoading(false);
    }, [movieId]);

    useEffect(() => {
        if (localStorage[movieId]) {
            setState(JSON.parse(localStorage[movieId]));
            setLoading(false);
        } else {
            fetchData();
        }
    }, [fetchData, movieId]);

    useEffect(() => {
        localStorage.setItem(movieId, JSON.stringify(state));
    }, [movieId, state]);

    return [state, loading, error];
};
