import { PostActionTypes } from "./types";

export const fetchPosts = () => {
    return {
        type: PostActionTypes.FETCH_POSTS,
        payload: [],
        meta: {
            method: "get",
            route: "/posts"
        }
    }
}

export const fetchPostsSuccess = (data) => {
    return {
        type: PostActionTypes.FETCH_POSTS_SUCCESS,
        payload: data,
    }
}

export const fetchPostsError = (message) => {
    return {
        type: PostActionTypes.FETCH_POSTS_ERROR,
        payload: message,
    }
}

