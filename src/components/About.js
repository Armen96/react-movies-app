import React, {useCallback, useEffect, useMemo, useState} from "react";
import {useForms} from "../hooks/useForms";
import AboutContext from "./AboutContext";

const About = () => {
    let [values, handleChange] = useForms({ email: '', password: ''});
    const [aboutState, setAboutState] = useState(true);

    useEffect(() => {
        console.log('render');
    }, [values.email])

    const clickHandler = (e) => {
        e.preventDefault();
        console.log('values', values);
    }

    const toggleAboutContext = () => {
        setAboutState(!aboutState);
    }

    return (
        <div>
            <form onSubmit={clickHandler}>
                <input type="email" name='email' value={values.email} onChange={handleChange}/>
                <input type="text" name='password' value={values.password} onChange={handleChange}/>

                <button type="submit">Submit</button>
            </form>

            <button onClick={toggleAboutContext}>Toggle About Context</button>
            {aboutState && <AboutContext />}

        </div>
    )
}

export default About;
