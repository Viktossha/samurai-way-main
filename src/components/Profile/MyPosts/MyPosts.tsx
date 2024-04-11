import React from 'react';
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";

export type PostsType = {
    id: number
    message: string
    likesCounts: number
}

type MyPostsPropsType = {
    posts: Array<PostsType>
}

export const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCounts={p.likesCounts}/>)

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    );
};