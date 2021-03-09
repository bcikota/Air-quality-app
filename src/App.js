import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './App.css';
import running from './images/running.png';
import aerobics from './images/aerobics.png';

function App() {
  const [url, setUrl] = useState('feed/here/?');
  const [location, setLocation] = useState('');
  const [aqi, setAqi] = useState(null);
  const [searchValue, setSearchValue] = useState('');


  useEffect(() => {
    fetch(`https://api.waqi.info/${url}token=c0a9c351f889b4756f46957e26d8f31376df7e1f`)
      .then(res => {
        return res.json();
      })
      .then(obj => {

        if (url === 'feed/here/?') {
          setLocation(obj.data.city.name);
          setAqi(obj.data.aqi);
        } else {
          setLocation(obj.data[0].station.name);
          setAqi(obj.data[0].aqi);
        }

      })
      .catch(error => {
        console.log(error);
      });
  }, [url]);

  useEffect(() => {
    (aqi > 300) ?
      document.body.style = `background: brown` :
      (aqi > 200) ?
        document.body.style = `background: purple` :
        (aqi > 150) ?
          document.body.style = `background: red` :
          (aqi > 100) ?
            document.body.style = `background: orange` :
            (aqi > 50) ?
              document.body.style = `background: yellow` :
              (aqi > 0) ?
                document.body.style = `background: green` :
                document.body.style = `background: lightgray`
  }, [aqi]);

  return (
    <div className="App">
      {aqi && <div className="dataContainer">
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
        <p>{location}</p>
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
                    (aqi > 0) ?
                      <div>
                        <p>Good</p>
                        <img src={running} alt="running person" />
                        <img src={aerobics} alt="aerobics" />
                      </div> :
                      <div>
                        <p>No Data</p>
                      </div>
        }
      </div>}

    </div>
  );
}

export default App;
