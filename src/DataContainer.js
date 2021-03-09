import { GlobalContext } from './GlobalContext';
import { useContext } from 'react';
import SearchForm from './SearchForm';
import HealthStatus from './HealthStatus';

const DataContainer = () => {
    const {
        url,
        myLocation,
        aqi
    } = useContext(GlobalContext);

    return (
        <div className="dataContainer">
            <SearchForm />
            {(url === 'feed/here/?') ? <p>Your location: </p> : <p>Location: </p>}
            <p>{myLocation}</p>
            <p>Air Quality Index: {aqi}</p>

            <HealthStatus />


        </div>
    );
}

export default DataContainer;