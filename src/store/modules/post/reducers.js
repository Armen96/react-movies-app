import { PostActionTypes } from "./types";
export const initialState = {
    data: [],
    errors: [],
    loading: false
};

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case PostActionTypes.FETCH_POSTS: {
            return {
                ...state,
                loading: true
            };
        }

        case PostActionTypes.FETCH_POSTS_SUCCESS: {
            return {
                ...state,
                data: action.payload
            };
        }

        case PostActionTypes.FETCH_POSTS_ERROR: {
            return {
                ...state,
                errors: action.payload
            };
        }

        default:
            return state;
    }
};
