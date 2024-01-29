import React from 'react';
import classes from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHmqPFoPodQadVaIKeyQGmb0Z7E9qu6e1siw&usqp=CAU" alt="main"/>
            </div>
            <div>
                ava + desc
            </div>
            <MyPosts/>
        </div>
    );
};