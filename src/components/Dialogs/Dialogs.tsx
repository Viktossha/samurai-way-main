import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";  //импортируем объект

type DialogItemType = {
    name: string
    id: number
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

    let dialogs = [
        {id: 1, name: 'Varya'},
        {id: 2, name: 'Kristina'},
        {id: 3, name: 'Misha'},
        {id: 4, name: 'Alina'},
    ]

    let messages = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Hi'},
        {id: 3, message: 'How are you'},
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = messages.map(m => <Message message={m.message}/>)

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