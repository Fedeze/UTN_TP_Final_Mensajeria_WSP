import React,{ createContext } from "react";

export const TestContext = createContext()

const TestContextProvider = ({ children }) => {
    const dato='Papa'
    const dato_disponible={
        dato: dato
    }
    return (
        <TestContext.Provider
            value={
                dato_disponible
            }
        >
            {children}
        </TestContext.Provider>
    )
}

export default TestContextProvider