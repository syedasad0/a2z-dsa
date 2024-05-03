/*

            *
          * * *
        * * * * *
      * * * * * * *
    * * * * * * * * *
    * * * * * * * * *
      * * * * * * *
        * * * * *
          * * *
            * 

*/

function pattern1(rows){
    for(let i=1; i<=rows; i++){
        for(let j=1; j<= rows-i; j++){
            process.stdout.write("  ");
        }
        for(let k=1; k<= 2*i-1; k++){
            process.stdout.write("* ");
        }
        for(let l=1; l<= rows-i; l++){
            process.stdout.write("  ");
        }
        console.log();
    }

}
function pattern2(rows){
    for(let i=1; i<=rows; i++){
        for(let j=1; j<i; j++){
            process.stdout.write("  ");
        }
        for(let k=1; k<= 2 * (rows -i) +1; k++){
            process.stdout.write("* ");
        }
        for(let l=1; l<i; l++){
            process.stdout.write("  ");
        }
        console.log();
    }
    
}
function printCombinedPattern(rows){
    pattern1(rows);
    pattern2(rows);
}

printCombinedPattern(5);
