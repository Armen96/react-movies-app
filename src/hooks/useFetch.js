import { useEffect, useState, useRef } from "react";

export const useFetch = (url) => {
    const isCurrent = useRef(true);
    const [state, setState] = useState({ data: '', loading: true });

    useEffect(() => {
        return () => {
            isCurrent.current = false;
        };
    }, []);

    useEffect(() => {
        setState(state => ({ data: state.data, loading: true }));
        fetch(url)
            .then(x => x.text())
            .then(y => {
                if (isCurrent.current) {
                    setState({ data: y, loading: false });
                }
            });
    }, [url]);

    return state;
};
