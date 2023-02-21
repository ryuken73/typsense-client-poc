const fs = require('fs');

const outStream = fs.createWriteStream('dummy.out');
let number = 1;
while(true){
    outStream.write(`${number}\n`);
    number+=1;
    if(number > 121313) break;
    if(number % 1000 === 0){
        console.log(`processed ${number}`);
    }
}