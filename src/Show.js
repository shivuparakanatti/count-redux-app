import React from "react";
 import { useSelector } from "react-redux";

const Show = ()=>{

    const count = useSelector((state)=>{
        return state.count
    })
    return (
        <h3>{count}</h3>
    )
}

export default Show