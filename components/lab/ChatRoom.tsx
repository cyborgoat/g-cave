"use client";
import React, {FormEvent, useEffect, useRef, useState} from "react";
import {Manager} from "socket.io-client";
import Messages from "./Messages";
import {Message} from "types/chat";
import {WS_SERVER_PATH, WS_SERVER_URL} from "api/_settings";

const manager = new Manager(WS_SERVER_URL, {
    path: WS_SERVER_PATH,
    autoConnect: false, // For demo purposes as we manually connect/disconnect
});


export default function ChatRoom() {
    const mySocket = manager.socket("/plaza");
    ;
    const [username, setUsername] = useState("");
    const [isConnected, setIsConnected] = useState(false); // socket.connected not always accurate; use a useState

    const [users, setUsers] = useState([] as string[]);

    const messageRef = useRef<HTMLInputElement>(null);
    const [msgList, setMsgList] = useState([] as Message[]);

    useEffect(() => {
        mySocket.on("connect", () => setIsConnected(true));
        mySocket.on("disconnect", () => setIsConnected(false));
        mySocket.on("response", (response) => console.log(response));
        mySocket.on("chat", (chat) => {
            const incomeMsg = chat as Message;
            incomeMsg.receiveTime = new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
            });
            if (typeof incomeMsg.users !== "undefined") {
                setUsers(incomeMsg.users);
            }
            setMsgList([...msgList, incomeMsg]);
        });

        // Clean-up
        return () => {
            mySocket.removeAllListeners("connect");
            mySocket.removeAllListeners("disconnect");
            mySocket.removeAllListeners("response");
        };
    }, [mySocket, msgList]);

    if (username === "") {
        return (
            <form
                className="mx-auto"
                onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                    e.preventDefault();
                    const target = e.target as typeof e.target & {
                        username: { value: string };
                    };
                    setUsername(target.username.value);
                    mySocket.auth = {username: target.username.value};
                }}
            >
                <input
                    name="username"
                    type="text"
                    placeholder="Enter your name: "
                    className="input input-bordered w-full max-w-xs"
                />
                <button type="submit" className="btn btn-primary text-xs ml-2">
                    Submit
                </button>
            </form>
        );
    }

    return (
        <>
            {isConnected && (
                <>
                    <div className="badge badge-xs badge-info"></div>
                    <span> {users.length} {"user\(s\)"} online</span>
                </>
            )}
            <Messages user={username} msgList={msgList}/>

            <div className="flex flex-row gap-4 mt-2">
                {!isConnected && (
                    <button
                        className="btn btn-success btn-sm"
                        onClick={() => mySocket.connect()}
                    >
                        Connect
                    </button>
                )}

                {isConnected && (
                    <button
                        className="btn btn-error btn-sm"
                        onClick={() => {
                            setUsername("");
                            mySocket.disconnect();
                            setMsgList(msgList.slice(0, 0));
                        }}
                    >
                        Disconnect
                    </button>
                )}
            </div>
            {isConnected && (
                <form
                    onSubmit={(e: FormEvent<HTMLFormElement>): void => {
                        e.preventDefault();
                        mySocket.emit("chat", messageRef?.current?.value);
                        const target = e.target as HTMLFormElement;
                        target.reset();
                    }}
                >
                    <div className="flex flex-row mt-2 gap-2">
                        <input
                            className="placeholder:italic placeholder:text-slate-400/50 block
              bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-200
               w-full border border-slate-300 dark:border-slate-800 
               rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none 
               focus:border-sky-600 focus:ring-sky-600 focus:ring-1 sm:text-sm"
                            placeholder="Enter your messages here"
                            type="text"
                            name="message"
                            ref={messageRef}
                        />

                        <button
                            className="rounded-full bg-slate-600/40 hover:bg-indigo-300 dark:hover:bg-indigo-600 text-sm p-2"
                            type="submit"
                        >
                            Send
                        </button>
                    </div>
                </form>
            )}
        </>
    );
}
