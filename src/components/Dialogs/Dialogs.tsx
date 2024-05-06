import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";  //импортируем объект

export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}

type DialogsPropsType = {
    state: {
        dialogs: Array<DialogsType>
        messages: Array<MessagesType>
    }
}

export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    );
};