export interface Message {
    _id: string;
    message: string;
    author: string;
    datetime: string;
}

export interface SendMessage {
    author: string;
    message: string;
}