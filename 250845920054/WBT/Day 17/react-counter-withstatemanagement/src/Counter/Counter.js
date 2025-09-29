import { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0)

    function counter() {
        setCount(count + 1);
    }

    return (
        <>
            <div>
                Count is: {count}
                <br />
                <button onClick={counter}>Click Here</button>
            </div>
        </>
    )
}

export default Counter;