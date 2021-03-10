import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";
import searchIconWhite from './images/search-icon-white.png'

const SearchForm = () => {
    const {
        setUrl,
        searchValue,
        setSearchValue,
        setOpenSearch
    } = useContext(GlobalContext);

    return (
        <form onSubmit={(e) => {
            e.preventDefault();

            setUrl(`search/?keyword=${searchValue}&`);
            setSearchValue('');
            setOpenSearch(false);
        }}>
            <input type="text" placeholder="Search" value={searchValue} onChange={(e) => {
                setSearchValue(e.target.value);
            }} />
            <button>
                <img src={searchIconWhite} alt="search icon"/>
            </button>
        </form>
    );
}

export default SearchForm;