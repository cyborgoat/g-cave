'use client'
import {createContext, useContext} from "react";


interface IAppContext {
    theme: string;
    updateTheme: (theme: string) => void;
}

export const AppContext = createContext<IAppContext>({ theme: 'dark', updateTheme(theme) { } })

export const useAppContext = () => useContext(AppContext);