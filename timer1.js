// To create sound use this: process.stdout.write('\x07');

// Edge cases we need to check //

/* 
1.No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.

2.An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.

3.An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number. 

*/

let args = process.argv.slice(2);

let newArgs = [];
let i;

for(i = 0; i < args.length; i++){
    let value = Number(args[i])
    newArgs.push(value);   
}

console.log(newArgs);

for(i = 0; i < newArgs.length; i++){
    if(isNaN(newArgs[i])|| Math.sign(newArgs[i]) === -1){
        continue;
    }
    else{
        setTimeout(() => process.stdout.write('\x07'),newArgs[i]*1000);
    }
}

