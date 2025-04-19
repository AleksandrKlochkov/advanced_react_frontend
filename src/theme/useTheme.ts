import React from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, ThemeContextProps } from "./ThemeContext";

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
    nextTheme: Theme;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = React.useContext<ThemeContextProps>(ThemeContext);

    const nextTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;

    const toggleTheme = React.useCallback(() => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }, [theme, setTheme]);

    return {
        theme,
        toggleTheme,
        nextTheme,
    }
}