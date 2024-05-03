/*

* * * *
* * * *
* * * *
* * * *

*/
function printPattern(number){
    for(let i =0; i<number; i++){
        let row = "";
        for( let j=0; j<number; j++){
            row = row + "* "
        }
        console.log(row)
    }
}
printPattern(5);
