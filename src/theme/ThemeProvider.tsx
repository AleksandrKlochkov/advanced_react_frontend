import React from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

const DEFAULT_THEME = localStorage?.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

export const ThemeProvider: React.FC = ({ children }) => {
    const [theme, setTheme] = React.useState<Theme>(
        DEFAULT_THEME
    );
    const defaultProps = React.useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            { children }
        </ThemeContext.Provider>
    );
};