import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchPosts} from "../store/modules/post/actions";
import PostList from "./PostList";

const PostListContainer = () => {
    const dispatch = useDispatch();

    const stateToProps = useSelector(
        ({ posts }) => ({
            loading: posts.loading,
            errors: posts.errors,
            data: posts.data
        })
    );

    const dispatchToProps = {
        fetchPosts: useCallback(() => dispatch(fetchPosts()), [])
    };

    return <PostList {...stateToProps} {...dispatchToProps} />;
};

export default PostListContainer;
