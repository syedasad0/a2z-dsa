/*

1
2  3
4  5  6
7  8  9  10
11 12 13 14 15

*/

function printPattern(num){
    let start=1;
    for(let i=1; i<=num; i++){
        for(let j=1; j<=i; j++){
            process.stdout.write(start+ " ");
            start = start+1;
        }
        console.log();
    }

}

printPattern(5)