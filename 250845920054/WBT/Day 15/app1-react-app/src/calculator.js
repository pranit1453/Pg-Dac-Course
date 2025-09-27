// const calculator = ({ ...a}) => {
//     const diviCheck = (n1, n2) => {
//         if (n2 === 0) {
//             return "Cannot Divide By 0 Change the Denominator"
//         }
//         return n1 / n2
//     }
//     return (
//         <>
//             <div>
//                 <h3>Addition of {num1} + {num2} : {num1 + num2}</h3>
//                 <h3>Subtraction of {num1} - {num2} : {num1 - num2}</h3>
//                 <h3>Multiplication of {num1} * {num2} : {num1 * num2}</h3>
//                 <h3>Division of {num1} / {num2} : {diviCheck(num1, num2)}</h3>
//             </div>
//         </>
//     )
// }



const calculator = ({ ...a}) => {
    const diviCheck = (n1, n2) => {
        if (n2 === 0) {
            return "Cannot Divide By 0 Change the Denominator"
        }
        return n1 / n2
    }
    return (
        <>
            <div>
                <h3>Addition of {a.num1} + {a.num2} : {a.num1 + a.num2}</h3>
                <h3>Subtraction of {a.num1} - {a.num2} : {a.num1 - a.num2}</h3>
                <h3>Multiplication of {a.num1} * {a.num2} : {a.num1 * a.num2}</h3>
                <h3>Division of {a.num1} / {a.num2} : {diviCheck(a.num1, a.num2)}</h3>
            </div>
        </>
    )
}

export default calculator;