import running from './images/running.png';
import aerobics from './images/aerobics.png';
import { GlobalContext } from './GlobalContext';
import useFetch from './useFetch';
import { useContext } from 'react';

const DataContainer = () => {
    const { url, setUrl, searchValue, setSearchValue } = useContext(GlobalContext);

    const { myLocation, aqi } = useFetch(url);

    return (
        <div className="dataContainer">
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
            {(url === 'feed/here/?') ? <p>Your location: </p> : <p>Location: </p>}
            <p>{myLocation}</p>
            <p>Air Quality Index: {aqi}</p>
            {
                (aqi > 300) ?
                    <div>
                        <p>Hazardous</p>
                        <p>Everyone should avoid all outdoor exertion</p>
                    </div> :
                    (aqi > 200) ?
                        <div>
                            <p>Very Unhealthy</p>
                            <p>Active children and adults, and people with respiratory disease, such as asthma, should avoid all outdoor exertion; everyone else, especially children, should limit outdoor exertion.</p>
                        </div> :
                        (aqi > 150) ?
                            <div>
                                <p>Unhealthy</p>
                                <p>Active children and adults, and people with respiratory disease, such as asthma, should avoid prolonged outdoor exertion; everyone else, especially children, should limit prolonged outdoor exertion</p>
                            </div> :
                            (aqi > 100) ?
                                <div>
                                    <p>Unhealthy for Sensitive Groups</p>
                                    <p>Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.</p>
                                </div> :
                                (aqi > 50) ?
                                    <div>
                                        <p>Moderate</p>
                                        <p>Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.</p>
                                    </div> :
                                    <div>
                                        <p>Good</p>
                                        <img src={running} alt="running person" />
                                        <img src={aerobics} alt="aerobics" />
                                    </div>

            }
        </div>
    );
}

export default DataContainer;