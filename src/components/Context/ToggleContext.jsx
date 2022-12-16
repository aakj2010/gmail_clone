import { useState, createContext } from 'react'
const ToggleContext = createContext()

export const ToggleProvider = ({ children }) => {
    const [query, setQuery] = useState("")
    // const keys = ['Title', 'Company']
    const [lefttoggle, setLeftToggle] = useState(true);
    const [righttoggle, setRightToggle] = useState(true);

    const ShowSideBar = () => {
        setLeftToggle(!lefttoggle);
    };
    const ShowRightBar = () => {
        setRightToggle(!righttoggle)
    };
    return (
        <ToggleContext.Provider value={{
            lefttoggle,
            setLeftToggle,
            righttoggle,
            setRightToggle,
            ShowSideBar,
            ShowRightBar,
            query,
            setQuery
        }}>
            {children}
        </ToggleContext.Provider>
    )
}
export default ToggleContext