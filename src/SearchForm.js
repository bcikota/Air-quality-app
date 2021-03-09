import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

const SearchForm = () => {
    const {
        setUrl,
        searchValue,
        setSearchValue,
    } = useContext(GlobalContext);

    return (
        <form onSubmit={(e) => {
            e.preventDefault();

            setUrl(`search/?keyword=${searchValue}&`);
            setSearchValue('');
        }}>
            <input type="text" placeholder="Search" value={searchValue} onChange={(e) => {
                setSearchValue(e.target.value);
            }} />
            <button>ok</button>
        </form>
    );
}

export default SearchForm;