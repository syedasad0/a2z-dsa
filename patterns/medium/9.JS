/*

* * * * *
*       *
*       *
*       *
* * * * *

*/

function printPattern(num){
    for(let i=1; i<=num; i++){
        if(i == 1 || i == num){
            for(let j=1; j<=num; j++){
                process.stdout.write("* ");
            }
        }else{
            for(let j=i; j<=i; j++){
                process.stdout.write("* ")
            }
            for(let j=1; j<= num-2; j++){
                process.stdout.write("  ");
            }
            for(let j=i; j<=i; j++){
                process.stdout.write("* ")
            }
        }
     
        console.log();
    }

}

printPattern(5)