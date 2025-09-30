import { useState, useEffect, useRef } from "react";

const LOWER = "abcdefghijklmnopqrstuvwxyz";
const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const DIGIT = "0123456789";
const SYMBOL = "!@#$*_%-";

const PswGenerator = () => {
    const [length, setLength] = useState(16);
    const [lower, setLower] = useState(true);
    const [upper, setUpper] = useState(true);
    const [num, setNum] = useState(true);
    const [symbol, setSymbol] = useState(false);
    const [psw, setPsw] = useState("");

    const passwordRef = useRef(null);

    // useEffect(() => {
    //     pswGenerator();
    // }, []);

    function buildCharSet() {
        let chars = "";
        if (lower) chars += LOWER;
        if (upper) chars += UPPER;
        if (num) chars += DIGIT;
        if (symbol) chars += SYMBOL;
        return chars;
    }

    function pswGenerator() {
        const charSet = buildCharSet();
        if (!charSet) {
            setPsw("Select at least one character type.");
            return;
        }

        let pass = "";
        for (let i = 0; i < length; i++) {
            const id = Math.floor(Math.random() * charSet.length);
            pass += charSet[id];
        }

        setPsw(pass);
    }

    // function handleCopy() {
    //     if (passwordRef.current && psw) {
    //         navigator.clipboard.writeText(psw);
    //         alert("Password copied to clipboard!");
    //     }
    // }

    function handleLengthChange(e) {
        const value = parseInt(e.target.value);
        if (!isNaN(value)) {
            const len = Math.max(4, Math.min(64, value));
            /*
            Math.min(64, 12) → 12       
            Math.max(4, 12) → 12
            length is now 12            Math.min(64, 2) → 2
                                        Math.max(4, 2) → 4
                                         length is now 4        Math.min(64, 100) → 64
                                                                Math.max(4, 64) → 64
                                                                length is now 64        parseInt("abc") → NaN
                                                                                        !isNaN(NaN) → false → fails check
                                                                                        setLength() ----> no change 
                        
            */
            setLength(len);
        }
    }

    return (
        <div style={{ marginLeft: '490px', marginTop: '220px' }}>
            <h2>Random Password Generator</h2>

            <div>
                <label>Length: {length} </label>
                <input
                    type="number"
                    min={4}
                    max={64}
                    value={length}
                    onChange={handleLengthChange}
                />
            </div>
            <pre></pre>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={lower}
                        onChange={(e) => setLower(e.target.checked)}
                    />
                    lowercase
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={upper}
                        onChange={(e) => setUpper(e.target.checked)}
                    />
                    UPPERCASE
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={num}
                        onChange={(e) => setNum(e.target.checked)}
                    />
                    numbers
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={symbol}
                        onChange={(e) => setSymbol(e.target.checked)}
                    />
                    symbols
                </label>
            </div>
            <pre></pre>
            <div>
                <button onClick={pswGenerator}>
                    Generate
                </button>
                {/* <button onClick={handleCopy}>
                    Copy
                </button>*/}
            </div>
            <pre></pre>
            <div ref={passwordRef}>
                {psw || <span style={{ color: "#ceababff" }}>Your password will appear here</span>}
            </div>
        </div>
    );
};

export default PswGenerator;
/*
Assume:

length = 5

charSet = "abc123"

We'll simulate each iteration of the loop:

Initial State:
pass = ""

Iteration 1 (i = 0):
Math.random() returns 0.72

id = Math.floor(0.72 * 6) = 4

charSet[4] = '2'

pass = "2"

Iteration 2 (i = 1):
Math.random() returns 0.15

id = Math.floor(0.15 * 6) = 0

charSet[0] = 'a'

pass = "2a"

Iteration 3 (i = 2):
Math.random() returns 0.50

id = Math.floor(0.50 * 6) = 3

charSet[3] = '1'

pass = "2a1"

Iteration 4 (i = 3):
Math.random() returns 0.90

id = Math.floor(0.90 * 6) = 5

charSet[5] = '3'

pass = "2a13"

Iteration 5 (i = 4):
Math.random() returns 0.33

id = Math.floor(0.33 * 6) = 1

charSet[1] = 'b'

pass = "2a13b"

✅ Final Output:
pass = "2a13b"

*/