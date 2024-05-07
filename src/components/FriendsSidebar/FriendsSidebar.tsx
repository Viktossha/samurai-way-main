import React from 'react';
import {FriendsType} from "../Friends/Friends";
import classes from "../FriendsSidebar/FriendsSidebar.module.css";
import {NavLink} from "react-router-dom";

type FriendsSidebarPropsType = {
    state: {
        friends: Array<FriendsType>
    }
}

export const FriendsSidebar = (props: FriendsSidebarPropsType) => {
    return (
        <div>
            <h3><NavLink to="/friends">Friends</NavLink></h3>
            <div className={classes.friends}>
                {props.state.friends.map(f => <div key={f.id} className={classes.friend}>
                    <img src={f.avatar}/>
                    <div className={classes.friendName}>{f.name}</div>
                </div>)}
            </div>
        </div>
    );
};