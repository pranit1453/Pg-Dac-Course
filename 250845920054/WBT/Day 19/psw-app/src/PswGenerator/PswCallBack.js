import { useCallback, useRef, useState } from "react";
import ErrorBoundary from "./ErrorBoundary";
const PswCallBack = () => {

    const [length, setLength] = useState(6);
    const[count,setCount]=useState(0);
    const [psw, setPsw] = useState('');

    const pswGenerator = useCallback(() => {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*?";
        let pswd = '';
        for (let i = 0; i < length; i++) {
            const random = Math.floor(Math.random() * chars.length);
            pswd += chars[random];
        }
        setPsw(pswd);
        setCount(prevCount=>prevCount+1);
        
    }, [length]);

     function handleCopy() {
         if (psw && navigator.clipboard) {
      navigator.clipboard.writeText(psw)
        .then(() => alert("Password copied to clipboard!"))
        .catch(() => alert("Failed to copy password."));
         }
    }

    if(count ===3){
        throw new Error("Limit (3) Reached!!!!");
        
    }

    return (
        <>
            <div>
                <h1>PassWord Generator.....</h1>
                <label>Length: </label>
                <input type="number" value={length} onChange={(e) => setLength(Number(e.target.value))} min={1}></input><br /><br />
                <button onClick={pswGenerator}>Generate Random PassWord</button><br/>
                <label>Count: {count}</label><br/>
                <button onClick={handleCopy}>Copy PassWord</button>
                <p><strong>Password:</strong> {psw}</p>
                
            </div>
        </>
    )
}

export default PswCallBack;