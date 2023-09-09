import { useEffect, useState } from "react";
import {fetchDataFromApi} from './api'

export const FetchData = (endpoint) =>{

    const [data, setData] = useState();

    useEffect ( async () => {
        makeApiCall()
    },[endpoint])

    const makeApiCall = async () =>{
        const res = await fetchDataFromApi(endpoint)
        setData(res)
    }
    return {data}
}