const fs = require('fs');
const readline = require('readline');

const readByLines = async (fname='dummy.out', size=1000, asyncCallback) => {
    const inFile = fs.createReadStream(fname);
    const rl = readline.createInterface({
        input: inFile
    })
    const SIZE = size;

    let processed = 0;
    let numOfLines = 0;
    let lines = "";

    for await(const line of rl){
        numOfLines += 1;
        processed += 1;
        if(numOfLines === SIZE){
            lines += `${line}`;
            await asyncCallback(lines);
            console.log('proccessed ', processed, Date());
            numOfLines = 0;
            lines = "";
        } else {
            lines += `${line}\n`;
        }
    }

    await asyncCallback(lines.replace(/\n$/,''));
    console.log('End proccessed ', processed)
    console.log('file read done done');

};

// const sleepLog = (msg, sleepTime=10) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(msg);
//             resolve();
//         }, sleepTime)
//     })
// }

// readByLines('dummy.out', 10000, sleepLog)

module.exports = readByLines;