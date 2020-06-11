import React from 'react';
import { Link } from '@reach/router';

import RMDBLogo from '../../assets/images/reactMovie_logo.png';
import TMDBLogo from '../../assets/images/tmdb_logo.svg';

import {
    StyledHeader,
    StyledRMDBLogo,
    StyledTMDBLogo
} from '../../assets/styles/StyledHeader';

const Header = () => (
    <StyledHeader>
        <div className="header-content">
            <Link to="/">
                <StyledRMDBLogo src={RMDBLogo} alt="rmdb-logo" />
            </Link>

            <StyledTMDBLogo src={TMDBLogo} alt="tmdb-logo" />

            <Link to="/about" style={{margin: "20px", color: 'white'}}>
                <span>About</span>
            </Link>
        </div>
    </StyledHeader>
);

export default Header;
