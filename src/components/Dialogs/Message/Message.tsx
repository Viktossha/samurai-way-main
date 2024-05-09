import React from 'react';
import classes from '../Dialogs.module.css'

type MessageType = {
    message: string
}
export const Message = (props: MessageType) => {
    return (
        <>
            <img className={classes.messageAvatar}
                src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
                alt="avatar"/>
            <div className={classes.message}>{props.message}</div>
        </>
    )
}
