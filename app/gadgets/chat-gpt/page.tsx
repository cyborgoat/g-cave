"use client";
import {useState} from "react";
import {ChatMessage} from "../../../types/chat";
import MessageItem from "@components/MessageItem";

export default function ChatGPT() {
    const [prompt, setPrompt] = useState("");
    const [messages, setMessages] = useState([] as ChatMessage[]);

    const handleSubmit = async () => {
        if (prompt.trim().length === 0) {
            return;
        }

        setMessages((messages) => [...messages, {
            text: prompt.trim(),
            id: new Date().toISOString(),
            author: "human"
        }]);

        setPrompt("");

        await new Promise((res) => setTimeout(res, 1000));

        setMessages((messages) => [...messages, {
            text: "Just some hardcoded response bla bla bla...",
            id: new Date().toISOString(),
            author: "ai"
        }]);
    }

    return (
        <div className="container">
            <div className="inputContainer">
    <textarea
        onChange={(e) => {
            setPrompt(e.target.value);
        }}
        value={prompt}
        placeholder="Ask a question"
        rows={3}
    />
                <button
                    onClick={handleSubmit}
                    className="submit">Submit
                </button>
            </div>
            <div className="answers">
                {messages.map(message =>
                    <MessageItem
                        key={message.id}
                        message={message}
                    />
                )}
            </div>
        </div>
    )
}