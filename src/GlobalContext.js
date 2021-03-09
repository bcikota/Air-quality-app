import { createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = (props) => {
    const [url, setUrl] = useState('feed/here/?');
    const [searchValue, setSearchValue] = useState('');
    return ( 
        <GlobalContext.Provider value={{url,setUrl,searchValue, setSearchValue}}>
            {props.children}
        </GlobalContext.Provider>
     );
}
 
export default GlobalContextProvider;