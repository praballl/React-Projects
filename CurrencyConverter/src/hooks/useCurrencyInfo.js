import { useEffect, useState } from "react";


export default function useCurrencyInfo(currency){
    const [data,useData] = useState({})

    useEffect(()=>{
        let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        fetch(url)
        .then((res)=>res.json())
        .then((res)=>useData(res[currency]))
    },[currency])
    console.log(data)
    return data 
}
