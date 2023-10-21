import {useEffect, useState} from "react";
import {MoonIcon, SunIcon} from "@nextui-org/shared-icons";
import {Button} from "@nextui-org/react";

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
        <Button onClick={toggleDarkMode} isIconOnly
                color={darkMode ? "warning" : "secondary"}
                variant="faded"
                aria-label="ColorMode">
            {darkMode ?
                <SunIcon className="h-6 w-6"/> :
                <MoonIcon className="h-6 w-6"/>
            }
        </Button>
    );
}