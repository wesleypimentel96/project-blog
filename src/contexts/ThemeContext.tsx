import { ReactNode, createContext, useEffect, useState } from "react";


const STORAGE_KEY_THEME = 'themeContext';

type ThemeContextType = {
    theme: string;
    setTheme: (theme: string) => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState(
         localStorage.getItem(STORAGE_KEY_THEME) || 'ligth'
    );


    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        localStorage.setItem(STORAGE_KEY_THEME, theme);

    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )

};