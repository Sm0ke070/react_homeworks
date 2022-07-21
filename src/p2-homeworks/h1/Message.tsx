import React from 'react'
import Style from './Message.module.css'

export type messageDataType = {
    avatar: string;
    name: string;
    message: string;
    time: string;
}

function Message(props: messageDataType) {
    return (
        <div className={Style.message}>
            <img className={Style.avatar} src={props.avatar} alt="pic"/>
            messageTest
            <div>
                <div>{props.name}</div>
                <div>{props.message}</div>
                <div>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
