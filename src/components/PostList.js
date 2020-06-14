import React, { useEffect } from "react";
import Post from "./Post";

const PostList = ({ data, fetchPosts }) => {

    useEffect(() => {
        fetchPosts()
    }, [fetchPosts]);

    return (
        <div>
            <ul>
                {data.map((post) => (
                    <Post key={post.id} title={post.title} />
                ))}
            </ul>
        </div>
    );
};

export default PostList;
