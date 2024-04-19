/*

A
A B
A B C
A B C D
A B C D E

*/

function printPattern(num){
    for(let i = 0; i < num; i++){
        for(let j = 0; j <= i; j++){
            process.stdout.write(String.fromCharCode(65 + j) + " ");
        }
        console.log();
    }
}

printPattern(5);
