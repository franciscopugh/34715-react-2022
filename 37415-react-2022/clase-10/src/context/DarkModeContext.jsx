import React, {createContext, useState} from 'react';

const DarkModeContext = createContext()

const DarkModeProvider = (props) => {

    const [darkMode, setDarkMode] = useState(false); //False o True // "Light" o "Dark"

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }
    /*
    const agregarDarkMode = () => {
        setDarkMode("dark")
    }

    const quitarDarkMode = () => {
        setDarkMode("light")
    }*/

    return (
        <>
            <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
                    {props.children}
            </DarkModeContext.Provider>
        </>
    );
}

export { DarkModeContext, DarkModeProvider};
