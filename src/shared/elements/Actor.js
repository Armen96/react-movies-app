import React from "react";
import PropTypes from 'prop-types';

import NoImage from '../../assets/images/no_image.jpg';

import { IMAGE_BASE_URL, POSTER_SIZE} from '../../config';
import { StyledActor } from '../../assets/styles/StyledActor';

const Actor = ({actor}) => {
    return (
        <StyledActor>
            <img
                src={
                    actor.profile_path
                        ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                        : NoImage
                }
                alt="actorthumb"
            />
            <span className="actor-name">{actor.name}</span>
            <span className="actor-character">{actor.character}</span>
        </StyledActor>
    )
};

Actor.prototype = {
    actor: PropTypes.any
};

export default Actor;
