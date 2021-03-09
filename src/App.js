import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from "react";
import './App.css';
import { GlobalContext } from './GlobalContext';
import useFetch from './useFetch';
import DataContainer from './DataContainer';

function App() {
  const { url } = useContext(GlobalContext);
  const { aqi } = useFetch(url);

  return (
    <div className="App">

      {(aqi > 0) ?
        <DataContainer /> :
        <div>
          <p>No Data</p>
          <button onClick={() => {
            document.location.reload();
          }}>Reload</button>
        </div>
      }

    </div>
  );
}

export default App;
