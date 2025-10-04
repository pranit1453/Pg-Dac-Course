import { useCallback, useState } from "react";

const IncrementCallBack=()=>{
    const [count,setCount]=useState(0);

    const increment=useCallback(()=>{
        setCount(prevCount=>prevCount+1);
    },[])
    return(
        <>
        <h1>Count:{count}</h1>
        <button onClick={increment}>Click Here</button>
        </>
    )
}

export default IncrementCallBack;