import { useState } from "react";

export const Display = ({ value }) => (
    <div style={{ padding: '10px', fontSize: '2rem', border: '1px solid black' }}>{value}</div>
);

export const Keypad = ({ onClick }) => {
    const btns = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'];
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginTop: '10px' }}>
            {btns.map((btn) => (
                <button
                    key={btn}
                    onClick={() => onClick(btn)}
                    style={{ padding: '20px', fontSize: '1.5rem' }}
                >
                    {btn}
                </button>
            ))}
        </div>
    );
};

const Calculator = () => {
    const [input, setInput] = useState('');
    const [num1, setNum1] = useState(null);
    const [operator, setOperator] = useState(null);

    const handleClicks = (val) => {
        if (val === 'C') {
            setInput('');
            setNum1(null);
            setOperator(null);
        } else if (['+', '-', '*', '/'].includes(val)) {
            setNum1(parseFloat(input));
            setOperator(val);
             setInput((prev) => prev + ' ' + val + ' ');
        } else if (val === '=') {
            if (operator && num1 !== null) {
                const num2 = parseFloat(input);
                let result = '';
                switch (operator) {
                    case '+': result = num1 + num2; break;
                    case '-': result = num1 - num2; break;
                    case '*': result = num1 * num2; break;
                    case '/': result = num1 / num2; break;
                    default: result = 'Error';
                }
                setInput(result.toString());
                setNum1(null);
                setOperator(null);
            }
        } else {
            setInput((prev) => prev + val);
        }
    };

    return (
        <div style={{ width: '300px', margin: '50px auto', textAlign: 'center' }}>
            <Display value={input} />
            <Keypad onClick={handleClicks} />
        </div>
    );
};

export default Calculator;
