import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext({
    themeMode: "light", 
    darkTheme: () => {}, 
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme() { // This is a custom hook - Here we create a hook that basically returns us the readymade context that we can directly use, instead of defining the context for different purpose at different locatoins in the App.jsx file, we create custom hooks for it and export it, so that, whenever some particular context is needed, ita can be simply imported
    return useContext(ThemeContext)
}