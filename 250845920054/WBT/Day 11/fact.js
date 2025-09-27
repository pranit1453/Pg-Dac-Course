// process.argv[0]: This element contains the path to the Node.js executable.
// process.argv[1]: This element contains the path to the JavaScript file being executed. 
const number = parseInt(process.argv[2]);
// process.argv is a global object that returns an array containing the command-line arguments
//  passed when the Node.js process was launched. 

function factorial(n) {
    if (n < 0) return undefined;
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

if (isNaN(number)) {
    console.log("Please provide a valid number.");
} else {
    console.log(`Factorial of ${number} is: ${factorial(number)}`);
}
