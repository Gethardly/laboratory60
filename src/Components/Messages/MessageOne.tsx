import React from "react";
import { Message } from "../../types";

interface Props {
    message: Message;
}

const MessageOne: React.FC<Props> = ({message}) => {
    return(
        <div className="msg">
            <h1>{message.author}</h1>
            <p>{message.message}</p>
            <p>{message.datetime}</p>
        </div>
    );
};

export default MessageOne;