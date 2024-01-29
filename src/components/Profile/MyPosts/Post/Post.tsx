import React from 'react';
import classes from './Post.module.css'

type PostPropsType = {
    message: string
    likeCounts: string
}

export const Post = (props: PostPropsType) => {
    return (
        <div className={classes.item}>
            <img src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png" alt="avatar"/>
            {props.message}
            <div>
                <span>like {props.likeCounts}</span>
            </div>
        </div>
    );
};