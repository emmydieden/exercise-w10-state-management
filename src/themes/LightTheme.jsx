import { createContext, useState, useContext } from "react";

const LightDarkContext = createContext()

export const LightDarkProvider = ({children}) => {
    const [light, setLight] = useState(true)

    const toggleLight = () => {
        setLight(!light);
        
    }

    return (
        <LightDarkProvider.Provider 
            value={{light, setLight, toggleLight}}>
            {children}
        </LightDarkProvider.Provider>
    )
}

export const useLightData = () => useContext(LightDarkContext)


// <div>
//           <button onClick={toggleLight}>Toggle Content</button>
//           {light && (
//             <div>
//               <p>This content is now visible!</p>
//             </div>
//           )}
//         </div>