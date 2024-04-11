import React from 'react';
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {

    let posts = [
        {id: 1, message: 'Hi, how are you', likesCounts: 15},
        {id: 2, message: 'It\'s my first post', likesCounts: 20},
    ]

    let postsElements = posts.map(p => <Post message={p.message} likesCounts={p.likesCounts}/>)

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