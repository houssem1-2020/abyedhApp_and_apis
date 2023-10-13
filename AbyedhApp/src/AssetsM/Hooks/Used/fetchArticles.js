import axios from "axios";
import { useState, useEffect } from "react";
import GConf from "../../../AssetsM/generalConf";

const useGetArticles = () => {
    //const
    const [data, setData] = useState([]);
    let Offline = JSON.parse(localStorage.getItem(`${GConf.PID}_Offline`));

    //Use Effects 
    useEffect(() => {
        
          async function fetchData() {
            await axios.post(`${GConf.ApiLink}/stock`, {
                PID: GConf.PID,
            })
            .then(function (response) {
                    setData(response.data)
            }).catch((error) => {
                if(error.request) {
                    setData(Offline.stock)
                }
            });

            // const response = await fetch(url);
            // const jsonData = await response.json();
            // setData(jsonData);
          }
          fetchData();

    }, [])

  return data ;
};

export default useGetArticles;