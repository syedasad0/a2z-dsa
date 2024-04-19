/*

A B C D E
A B C D
A B C
A B
A

*/

function printPattern(num){
    for(let i=0; i<num; i++){
        for(let j=0; j<num-i; j++){
            process.stdout.write(String.fromCharCode(65 + j) + "  ");
        }
        console.log();

    }

}

printPattern(5);