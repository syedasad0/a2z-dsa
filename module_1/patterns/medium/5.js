/*

1
0 1
1 0 1
0 1 0 1
1 0 1 0 1

*/

function printPattern(num){
    let start = 1;
    for(let i = 0; i < num; i++){
        if(i % 2 == 0){
            start = 1;
        } else {
            start = 0;
        }
        for(let j = 0; j <= i; j++){
            process.stdout.write(start + " ");
            start = 1 - start; // to flip between 0 and 1
        }
        console.log();
    }
}

printPattern(5);

