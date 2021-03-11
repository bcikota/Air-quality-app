import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from "react";
import './App.css';
import { GlobalContext } from './GlobalContext';
import DataContainer from './DataContainer';
import FetchData from './FetchData';
import ChangeBackground from './ChangeBackground';
import SearchForm from './SearchForm';

function App() {
  const { aqi } = useContext(GlobalContext);
  FetchData();
  ChangeBackground();

  return (
    <div className="App">

      {(aqi > 0) ?
        <DataContainer /> :
        <div>
        <SearchForm />
          <p>No Data</p>
          <button className="reload" onClick={() => {
            document.location.reload();
          }}>Reload</button>
        </div>
      }

    </div>
  );
}

export default App;
