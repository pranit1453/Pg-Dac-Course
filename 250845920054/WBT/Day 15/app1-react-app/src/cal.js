


const cal = ({ ...a }) => {

    const calOperation = () => {
        switch (a.Operation) {
            case 'add':
                return a.num1 + a.num2
            case 'subtract':
                return a.num1 - a.num2
            case 'multiply':
                return a.num1 * a.num2
            case 'divide':
                return a.num2 !== 0 ? (a.num1 / a.num2).toFixed(2) : 'Cannot Divide By 0 Change the Denominator' //(rounded to two decimal places)
            default:
                return 'Invalid Operation'
        }
    }
    
    return (
        <>
            <div>
                <h3>Calculator ({a.Operation})</h3>
                <p>Result : {calOperation()}</p>
            </div>
        </>
    )
}

export default cal;