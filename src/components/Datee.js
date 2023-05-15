import React from "react";
import { useState , useEffect} from "react";

import '../index.css'

function Datee(){

    const[date , setDate] = useState(new Date().getHours() + ":" + new Date().getMinutes()+ ":" + new Date().getSeconds());

    useEffect(()=>
    {
        setTimeout( function dateChange(){
            setDate(new Date().getHours() + ":" + new Date().getMinutes()+ ":" + new Date().getSeconds());
        },1000);
    }, [date]);


    return <>
        <h1>{date}</h1>
    </>
}

export default Datee;