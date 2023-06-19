'use client';
import {ReactNode, useEffect, useState} from "react";
import {CookiesProvider} from "react-cookie";
import {AppContext} from "./AppContext";

interface ChildrenProps {
    children: ReactNode;
}

const AppContextProvider = ({ children }: ChildrenProps) => {
    const [theme, setTheme] = useState<string | null>("dark");

    useEffect(() => {
        setTheme(window.localStorage.getItem("theme"));
    })

    const updateTheme = (newTheme: string) => {
        window.localStorage.setItem("theme", newTheme);
        const body = window.document.body;
        if (theme != null) {
            body.classList.remove(theme);
        }
        body.classList.add(newTheme);
        setTheme(newTheme);
    };

    return (
        <AppContext.Provider value={{ theme: theme != null ? theme : 'dark', updateTheme }}>
            <CookiesProvider>
                <body className={theme != null ? theme : 'dark'}>
                    {children}
                </body>
            </CookiesProvider>
        </AppContext.Provider>
    )
}


export default AppContextProvider;