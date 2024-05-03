/*

1                 1  
1 2             2 1
1 2 3         3 2 1
1 2 3 4     4 3 2 1
1 2 3 4 5 5 4 3 2 1

*/

function printPattern(num){
    let space = 2*(num-1);
    for(let i=1; i<=num; i++){
        for(let j=1; j<=i; j++){
            process.stdout.write(j + " ");
        }
        // console.log('space==>', space);
         for (let j = 1; j <= space; j++) {
            process.stdout.write("  ");
        }

        for(let j=i; j>=1; j--){
            process.stdout.write(j + " ");
        }
        console.log();
        space = space -2;
    }
}

printPattern(5);