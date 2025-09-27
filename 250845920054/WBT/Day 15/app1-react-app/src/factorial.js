
import React from 'react';

const Factorial = ({ number }) => {
    const calFact = (n) => {
        if (n < 0) {
            return "invalid Value (value can't be negative)";
        }
        return n === 0 ? 1 : n * calFact(n - 1);
    };

    return (
        <div>
            <h3>Factorial</h3>
            <p>Factorial of {number} is : {calFact(number)}</p>
        </div>
    );
};

export default Factorial;
