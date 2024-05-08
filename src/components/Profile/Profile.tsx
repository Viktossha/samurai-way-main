import React from 'react';
import classes from './Profile.module.css'
import {MyPosts, PostsType} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";

type ProfilePropsType = {
    state: {
        posts: Array<PostsType>
    }
    addPost: (postText: string) => void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts} addPost={props.addPost}/>
        </div>
    );
};