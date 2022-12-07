import { createContext, useState } from 'react';

const MysteryContext = createContext();

function MysteryContextProvider(props) {
    const [mystery, setMystery] = useState("mystery value!");

    return (
        <MysteryContext.Provider value={mystery}>
            {props.children}
        </MysteryContext.Provider>
    )
}

export { MysteryContextProvider, MysteryContext }