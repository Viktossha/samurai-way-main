import React from 'react';
import classes from "./ProfileInfo.module.css";

export const ProfileInfo = () => {
    return (
        <>
            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHmqPFoPodQadVaIKeyQGmb0Z7E9qu6e1siw&usqp=CAU"
                    alt="main"/>
            </div>
            <div className={classes.descriptionBlock}>
                ava + desc
            </div>
        </>
    )
        ;
};