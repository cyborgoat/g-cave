"use client";
import {time} from "console";
import {useEffect, useRef} from "react";
import {Message} from "types/chat";

export default function Messages({
  user,
  msgList,
}: {
  user: string;
  msgList: Message[];
}) {
  const bottomRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [msgList]);
  return (
    <div className="w-full h-128 rounded-md border-indigo-400/40 border-2 overflow-y-scroll">
      <div className="chat chat-start">
        <div className="chat-image avatar"></div>
        <div className="chat-header">
          Bot
          <time className="text-xs opacity-50">{}</time>
        </div>
        <div className="chat-bubble">
          Welcome to the chatroom, click <b>Connect</b> and start typing! Other
          people will see what you send.
        </div>
        {/* <div className="chat-footer opacity-50">Delivered</div> */}
      </div>
      {msgList.map((msg, idx) => {
        return (
          <div
            key={idx}
            className={`chat ${
              user == msg.username ? "chat-end" : "chat-start"
            }`}
          >
            <div className="chat-image avatar"></div>
            <div className="chat-header">
              {msg.username}
              <time className="text-xs opacity-50"> {msg.receiveTime}</time>
            </div>
            <div
              className={`chat-bubble ${
                user === msg.username ? "chat-bubble-primary" : ""
              }`}
            >
              {msg.message}
            </div>
            {/* <div className="chat-footer opacity-50">Seen at 12:46</div> */}
          </div>
        );
      })}
      <div ref={bottomRef}></div>
    </div>
  );
}
