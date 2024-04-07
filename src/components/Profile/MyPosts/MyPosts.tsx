import React from 'react';
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {

    let postsData = [
        {id: 1, message: 'Hi, how are you', likesCounts: 15},
        {id: 2, message: 'It\'s my first post', likesCounts: 20},
    ]

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
                <Post message={postsData[0].message} likesCounts={postsData[0].likesCounts}/>
                <Post message={postsData[1].message} likesCounts={postsData[1].likesCounts}/>
            </div>
        </div>
    );
};