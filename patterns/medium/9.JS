/*

* * * * *
*       *
*       *
*       *
* * * * *

*/
/*
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

*/

//Another Solution

/*
  0 1 2 3 4
0 * * * * *
1 *       *
2 *       *
3 *       *
4 * * * * *

*/



function printPattern(num){

    for(let i=0; i<num; i++){
        for(let j=0; j<num; j++){
            if(i==0 || j==0 || i == num-1 || j == num-1){
                process.stdout.write("* ")
            }
            else{
                process.stdout.write("  ");
            }
        }
        console.log();
    }


}

printPattern(5);