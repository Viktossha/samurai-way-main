import React from 'react';
import classes from '../Dialogs.module.css'
import {NavLink} from "react-router-dom";  //импортируем объект

type DialogItemType = {
    name: string
    id: number
}
export const DialogItem = (props: DialogItemType) => {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}