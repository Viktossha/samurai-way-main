import React from 'react';
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
            <div>
                my posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <div className={classes.posts}>
                    <Post message='Hi, how are you' likeCounts='15'/>
                    <Post message="It's my first post" likeCounts='20'/>
                </div>
            </div>
    );
};