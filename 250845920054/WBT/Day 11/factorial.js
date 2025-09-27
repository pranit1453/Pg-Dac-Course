const number = parseInt(process.argv[2])
//process.argv[0]=path of node js && process.argv[1]=path of file
function factorial(n) {
    if (n < 0) return undefined;
    if (n === 0 || n === 1) return 1;
    return n * factorial(n-1);   
    }
    if (isNaN(number) ){
        console.log("Enter a Valid Number");
    }
        else{
            console.log(`factorial of ${number} is ${factorial(number)}`);
            
        }
    
