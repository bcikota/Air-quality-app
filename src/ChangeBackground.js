import { useContext, useEffect } from "react";
import { GlobalContext } from "./GlobalContext";

const ChangeBackground = () => {
    const {aqi} = useContext(GlobalContext);

    useEffect(() => {
        (aqi > 300) ?
          //brown
          document.body.style = `background: rgb(222,208,0);
          background: linear-gradient(0deg, rgba(222,208,0,1) 0%, rgba(161,76,6,1) 0%, rgba(255,153,70,1) 100%);` :
          (aqi > 200) ?
            //purple
            document.body.style = `background: rgb(222,208,0);
            background: linear-gradient(0deg, rgba(222,208,0,1) 0%, rgba(194,15,190,1) 0%, rgba(255,130,252,1) 100%);` :
            (aqi > 150) ?
              //red
              document.body.style = `background: rgb(222,208,0);
              background: linear-gradient(0deg, rgba(222,208,0,1) 0%, rgba(255,22,10,1) 0%, rgba(255,116,95,1) 100%);` :
              (aqi > 100) ?
                //orange
                document.body.style = `background: rgb(222,208,0);
                background: linear-gradient(0deg, rgba(222,208,0,1) 0%, rgba(255,128,0,1) 0%, rgba(255,209,80,1) 100%);` :
                (aqi > 50) ?
                  //yellow
                  document.body.style = `background: rgb(222,208,0);
                  background: linear-gradient(0deg, rgba(222,208,0,1) 0%, rgba(255,241,10,1) 0%, rgba(255,248,123,1) 100%);` :
                  (aqi > 0) ?
                    //green
                    document.body.style = `background: rgb(222,208,0);
                    background: linear-gradient(0deg, rgba(222,208,0,1) 0%, rgba(81,195,93,1) 0%, rgba(158,255,170,1) 100%);` :

                    document.body.style = `background: lightgray`
      }, [aqi]);
    
}
 
export default ChangeBackground;