import React, {RefObject} from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsType, MessagesType} from "../../redux/state";

type DialogsPropsType = {
    state: {
        dialogs: Array<DialogsType>
        messages: Array<MessagesType>
    }
}

export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>)

    let newMessage:RefObject<HTMLTextAreaElement> = React.createRef()
    let addMessage = () => {
        let text = newMessage.current?.value
        alert(text)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <textarea ref={newMessage}></textarea>
                <div>
                    <button onClick={addMessage}>Send message</button>
                </div>
            </div>
        </div>
    );
};