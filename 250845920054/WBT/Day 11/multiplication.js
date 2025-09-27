function multiplication(num1, num2) {
    return new Promise((resolve, reject) => {
        // To check if the input(num1&num2) are of type number
        if (typeof num1 !== 'number' || typeof num2 !== 'number' || isNaN(num1) || isNaN(num2)) {
            reject('Both inputs must be valid numbers');
        } else if (num1 > 0 && num2 > 0) {
            const result = num1 * num2;
            resolve(result);
        } else {
            reject('Both numbers must be POSITIVE');
        }
    });
}
// Take user inputs
const args = process.argv.slice(2); 
const num1 = Number(args[0]);
const num2 = Number(args[1]);

multiplication(num1, num2)
    .then(result => {
        console.log('Multiplication Result of the 2 numbers is', result);
    })
    .catch(error => {
        console.log('Error:', error);
    });
