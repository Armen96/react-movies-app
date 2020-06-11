import React, {useState} from "react";
import {useFetch} from "../hooks/useFetch";

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

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <div>
            Hell o about context

            <button onClick={handleClick}>Next Number</button> <br/>

            <div>
                { loading ? 'loading' : data }
            </div>

        </div>
    )
}

export default AboutContext;
