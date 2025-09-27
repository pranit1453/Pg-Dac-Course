
console.log("------------------------------Synchronous--------------------------------------------------------");
const fs = require('fs');

try {
  const data1= "Hello, this is Synchronous File Writing!\nAnother line."
  fs.writeFileSync('example_sync.txt', data1);
  console.log('Synchronous write complete.');

  const data2 = fs.readFileSync('example_sync.txt', 'utf8');
  console.log('Synchronous read content:');
  console.log(data2);
} catch (err) {
  console.error(err);
}

console.log("-------------------------------asynchronous----------------------------------------------------------");

fs.writeFile('example_async.txt', 'Hello, this is asynchronous file writing!\nAnother line.', (err) => {
  if (err) {
    return console.error(err)
  };
  console.log('Asynchronous write complete.');

  fs.readFile('example_async.txt', 'utf8', (err, data) => {
    if (err) {
      return console.error(err)
    };
    console.log('Asynchronous read content:');
    console.log(data);
  });
});










































//console.log("--------------------------asynchronous(Promise)----------------------------------------------------------");

// const fs1 = require('fs').promises
// async function asyncWriteRead(){
//     try{
//         let dataPromise="Hello, this is asynchronous(Promise) file writing!\nAnother line."
//         await fs.writeFile('example_async_promise.txt', dataPromise)
//         console.log('Async (Promise) Write Complete');
        
//         const data2 = await fs.readFile('example_async_promise.txt','utf8')
//         console.log('Async Read Content');
//         console.log(data2);
//     }catch(err){
//         console.error(err);
        
//     }
// }

// asyncWriteRead()