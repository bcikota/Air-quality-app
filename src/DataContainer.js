import { GlobalContext } from './GlobalContext';
import { useContext } from 'react';
import SearchForm from './SearchForm';
import HealthStatus from './HealthStatus';
import { Col, Container, Row } from 'react-bootstrap';
import searchIcon from './images/search-icon.png';

const DataContainer = () => {
    const {
        url,
        myLocation,
        aqi,
        openSearch,
        setOpenSearch,
        time
    } = useContext(GlobalContext);

    return (
        <Container>
            <div className="dataContainer" >
                <Row>
                    <Col>
                        <div className="open-search" onClick={() => { setOpenSearch(!openSearch) }}>
                            <img src={searchIcon} alt="search icon"/>
                        </div>
                    </Col>
                    <Col xs={6}>{(url === 'feed/here/?') ? <p className="location-name">Your location: </p> : <p className="location-name">Location: </p>}</Col>
                    <Col></Col>
                </Row>


                {openSearch && <SearchForm />}


                <p className="location">{myLocation}</p>
                <p className="aqi">Air Quality Index: {aqi}</p>

                {time && <p className="time">{time.slice(0, time.length-3)}</p>}
                

                <HealthStatus />


            </div>
        </Container>

    );
}

export default DataContainer;