import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";  //импортируем объект

type DialogItemType = {
    name: string
    id: string
}
const DialogItem = (props: DialogItemType) => {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

type MessageType = {
    message: string
}
const Message = (props: MessageType) => {
  return (
      <div className={classes.message}>{props.message}</div>
  )
}

export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name='Varya' id='1'/>
                <DialogItem name='Kristina' id='2'/>
                <DialogItem name='Misha' id='3'/>
                <DialogItem name='Alina' id='4'/>
            </div>
            <div className={classes.messages}>
                <Message message='Hello'/>
                <Message message='Hi'/>
                <Message message='How are you?'/>
            </div>
        </div>
    );
};