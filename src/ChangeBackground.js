import { useContext, useEffect } from "react";
import { GlobalContext } from "./GlobalContext";

const ChangeBackground = () => {
    const {aqi} = useContext(GlobalContext);

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
    
}
 
export default ChangeBackground;