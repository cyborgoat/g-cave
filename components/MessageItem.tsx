import {ChatMessage} from "../types/chat";
import {useEffect, useState} from "react";

export default function MessageItem({key, message}: { key: string, message: ChatMessage }) {
    const [text, setText] = useState(message.author === "human" ? message.text : "");

    useEffect(() => {
        setTimeout(() => {
            setText(message.text.slice(0, text.length + 1));
        }, 10);
    }, [text, message.text]);

    return (
        <div className="answer">
            <div className={`author author-${message.author}`}>
                {message.author}:
            </div>
            <div className="message">
                {text}
            </div>
        </div>
    )
}

