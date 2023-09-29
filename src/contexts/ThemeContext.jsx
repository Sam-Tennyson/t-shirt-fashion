// ThemeContext.js
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();
export const THEME_COLOR = {
    LIGHT: "light",
    DARK: "dark"
}

export const useTheme = () => {
    return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(THEME_COLOR.LIGHT);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === THEME_COLOR.LIGHT ? THEME_COLOR.DARK : THEME_COLOR.LIGHT));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;
