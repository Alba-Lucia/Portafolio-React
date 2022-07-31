const langContext = React.createContext();

const LangProvide = ({children}) => {
    return (
        <langContext.Provider value={{hola: "hola alba"}}>
            {/* {children} */}
        </langContext.Provider>
    );
}

export {LangProvide, langContext}