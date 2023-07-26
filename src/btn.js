import React from "react";
import { useDispatch } from "react-redux";
import { increment,decrement,incrementBy } from "./action/countActions";

const Btn = ()=>{

    const dispatch = useDispatch()

    
return (
        <div>
            <button onClick={()=>{
                dispatch(increment())
            }}>
            +1
            </button>
        
            <button onClick={()=>{
                dispatch(decrement())
            }}>
            -1
            </button>
        
        </div>
    )
}

export default Btn