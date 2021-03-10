import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";
import running from './images/running.png';
import aerobics from './images/aerobics.png';
import { Col, Row } from "react-bootstrap";

const HealthStatus = () => {
    const { aqi } = useContext(GlobalContext);

    return (
        <div>
            {
                (aqi > 300) ?
                    <div>
                        <p className="status">Hazardous</p>
                        <p className="status-description">Everyone should avoid all outdoor exertion</p>
                    </div> :
                    (aqi > 200) ?
                        <div>
                            <p className="status">Very Unhealthy</p>
                            <p className="status-description">Active children and adults, and people with respiratory disease, such as asthma, should avoid all outdoor exertion; everyone else, especially children, should limit outdoor exertion.</p>
                        </div> :
                        (aqi > 150) ?
                            <div>
                                <p className="status">Unhealthy</p>
                                <p className="status-description">Active children and adults, and people with respiratory disease, such as asthma, should avoid prolonged outdoor exertion; everyone else, especially children, should limit prolonged outdoor exertion</p>
                            </div> :
                            (aqi > 100) ?
                                <div>
                                    <p className="status">Unhealthy for Sensitive Groups</p>
                                    <p className="status-description">Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.</p>
                                </div> :
                                (aqi > 50) ?
                                    <div>
                                        <p className="status">Moderate</p>
                                        <p className="status-description">Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.</p>
                                    </div> :
                                    <div className="good">
                                        <p className="status">Good</p>
                                        <Row>
                                            <Col>
                                                <img src={running} alt="running person" />
                                            </Col>
                                            <Col>
                                                <img src={aerobics} alt="aerobics" />
                                            </Col>
                                        </Row>


                                    </div>

            }
        </div>
    );
}

export default HealthStatus;