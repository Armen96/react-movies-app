import React, {useCallback, useDebugValue, useLayoutEffect, useRef, useState} from "react";
import {useFetch} from "../hooks/useFetch";
import AboutCounter from "./AboutCounter";

const AboutContext = () => {
    const [count, setCount] = useState(0);
    const {data, loading} = useFetch(`http://numbersapi.com/${count}/trivia`)

    React.useEffect(() => {
        console.log("Component Mount")

        // unmount component
        return () => {
            console.log("UNMOUNT")
        }
    }, []) // [] mount component

    const divRef = useRef({});
    useLayoutEffect(() => {
        console.log('useLayoutEffect HOOK')
    }, [data])

    const handleClick = useCallback(() => {
        setCount(c => c + 1);
    }, [setCount]);

    return (
        <div>
            Hell o about context
            <button onClick={handleClick}>Next Number</button> <br/>

            <br/><br/>
            <AboutCounter counter={count}/>
            <br/><br/>

            <div style={{ display: 'flex'}}>
                <div ref={divRef}>{ loading ? 'loading' : data }</div>
            </div>
        </div>
    )
}

export default AboutContext;
