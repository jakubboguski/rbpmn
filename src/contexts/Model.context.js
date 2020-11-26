import React, { useState } from 'react';
import basicDiagram from '../constants/data';

export const ModelContext = React.createContext({});

const ModelProvider = ({ children }) => {
    const [diagram, setDiagram] = useState(basicDiagram);

    return (
        <ModelContext.Provider
            value={{
                diagram,
                setDiagram,
            }}
        >
            {children}
        </ModelContext.Provider>
    )
}

export default ModelProvider;