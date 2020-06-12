import { action } from "typesafe-actions";
import { PostActionTypes } from "./types";

export const fetchPosts = () => {
    action(PostActionTypes.FETCH_POSTS, [], {
        method: "get",
        route: "/posts"
    });
}

export const fetchPostsSuccess = (data) => {
    action(PostActionTypes.FETCH_POSTS_SUCCESS, data);
}

export const fetchPostsError = (message) => {
    action(PostActionTypes.FETCH_POSTS_ERROR, message);
}

