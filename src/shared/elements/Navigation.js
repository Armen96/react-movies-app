import React from "react";
import PropTypes from 'prop-types';
import {Link} from "@reach/router";
import { StyledNavigation } from '../../assets/styles/StyledNavigation';


const Navigation = ({movie}) => {
    return (
        <StyledNavigation>
            <div className="navigation-content">
                <Link to="/">
                    <p>Home</p>
                </Link>
                <p>|</p>
                <p>{movie}</p>
            </div>
        </StyledNavigation>
    );
};

Navigation.prototype = {
    movie: PropTypes.string
};

export default Navigation;
