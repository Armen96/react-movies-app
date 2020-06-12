import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchPosts} from "../store/ducks/post/actions";
import PostList from "./PostList";

const PostListContainer = () => {
    const dispatch = useDispatch();

    const stateToProps = useSelector(
        ({ post }) => ({
            loading: post.loading,
            errors: post.errors,
            data: post.data
        })
    );

    const dispatchToProps = {
        fetchPosts: useCallback(() => dispatch(fetchPosts()), [])
    };

    return <PostList {...stateToProps} {...dispatchToProps} />;
};

export default PostListContainer;
