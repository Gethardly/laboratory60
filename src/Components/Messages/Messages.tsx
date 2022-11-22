import React from "react";
import { Message } from "../../types";
import MessageOne from "./MessageOne";

interface Props {
    messages: Message[];
};

const Messages: React.FC<Props> = ({messages}) => {
    return(
        <div className="msgs">
            {messages.map(message => (
                <MessageOne key={message._id} message={message}/>
            ))}
        </div>
    );
};

export default Messages;