import { useContext, useEffect } from "react";
import { GlobalContext } from "./GlobalContext";

const FetchData = () => {
  const { url,
    myLocation,
    setMyLocation,
    aqi,
    setAqi } = useContext(GlobalContext);

  useEffect(() => {
    fetch(`https://api.waqi.info/${url}token=c0a9c351f889b4756f46957e26d8f31376df7e1f`)
      .then(res => {
        return res.json();
      })
      .then(obj => {

        if (url === 'feed/here/?') {
          setMyLocation(obj.data.city.name);
          setAqi(obj.data.aqi);
        } else {
          setMyLocation(obj.data[0].station.name);
          setAqi(obj.data[0].aqi);
        }

      })
      .catch(error => {
        console.log(error);
      });
  }, [url, setAqi, setMyLocation]);

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
  return { myLocation, aqi }
}

export default FetchData;