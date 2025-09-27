console.log('First');
setTimeout(() =>
    console.log('TIMEOUT'), 2000);

process.nextTick(() => {
    console.log('process.nextTick');
});
Promise.resolve().then(() => {
    console.log('Promise callback');
});
setImmediate(() => {
    console.log('Immediate callback');

});
console.log('Third');













