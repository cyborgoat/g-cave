import {useEffect, useState} from "react";
import {MoonIcon, SunIcon} from "@nextui-org/shared-icons";

export function DarkModeToggle() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(isDarkMode);
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode);
        localStorage.setItem('darkMode', String(darkMode));
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    return (
        <button onClick={toggleDarkMode} className="transparent" >
            {darkMode ? <SunIcon/> : <MoonIcon/>}
        </button>
    );
}