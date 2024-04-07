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

    let dialogsData = [
        {id: 1, name: 'Varya'},
        {id: 2, name: 'Kristina'},
        {id: 3, name: 'Misha'},
        {id: 4, name: 'Alina'},
    ]

    let messagesData = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Hi'},
        {id: 3, message: 'How are you'},
    ]

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
            </div>
            <div className={classes.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
            </div>
        </div>
    );
};