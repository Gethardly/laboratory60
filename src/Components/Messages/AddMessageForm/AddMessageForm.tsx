import React, { useState } from "react";
import { SendMessage } from "../../../types";

interface Props {
    onSubmit: (message: SendMessage) => void;
}

const AddMessageForm: React.FC<Props> = ({onSubmit}) => {
    const [message, setMessage] = useState<SendMessage>({
        author: '',
        message: '',
    });


    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        setMessage(prev => ({...prev, [name]: value}));
    };

    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(message);
    };
    return(
        <form className="MessageForm" onSubmit={onFormSubmit}>
            <label>
                Author:
                <input
                name="author"
                type="text"
                onChange={onInputChange}
                />
            </label>

            <label>
                Message:
                <input 
                name="message"
                type="text"
                onChange={onInputChange}
                />
            </label>
            <button type="submit">Add new message</button>
        </form>
    )
};

export default AddMessageForm;