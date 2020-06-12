import { PostActionTypes } from "./types";
export const initialState = {
    data: [],
    errors: [],
    loading: false
};
export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case PostActionTypes.FETCH_POSTS: {
            return { ...state, loading: true };
        }

        case PostActionTypes.FETCH_POSTS_SUCCESS: {
            return { ...initialState, data: action.payload };
        }

        case PostActionTypes.FETCH_POSTS_ERROR: {
            return {
                ...state
            };
        }

        default:
            return state;
    }
};
