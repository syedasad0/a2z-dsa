/*

A
B B
C C C
D D D D
E E E E E

*/

function printPattern(num){
    for(let i=0; i<num; i++){
        for(let j=0; j<=i; j++){
            process.stdout.write(String.fromCharCode(65 + j) + " ")
        }
        console.log();
    }

}

printPattern(5);