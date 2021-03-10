import { createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = (props) => {
    const [url, setUrl] = useState('feed/here/?');
    const [searchValue, setSearchValue] = useState('');
    const [myLocation, setMyLocation] = useState('');
    const [aqi, setAqi] = useState(null);
    const [openSearch, setOpenSearch] =  useState(false);
    return (
        <GlobalContext.Provider
            value={{
                url,
                setUrl,
                searchValue,
                setSearchValue,
                myLocation,
                setMyLocation,
                aqi,
                setAqi,
                openSearch,
                setOpenSearch
            }
            }>
            {props.children}
        </GlobalContext.Provider>
    );
}

export default GlobalContextProvider;