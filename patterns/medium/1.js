/*

            *
          * * *
        * * * * *
      * * * * * * *
    * * * * * * * * *
*/

/*
line 1 -> 1 star at 5th pos
line 2 -> 2 stars at 4th and 5th pos
line 3
line 4
line 5 -> 5 stars at 1st, 2nd, 3rd, 4th and 5th pos

*/
let rows = 5;
for(let i=1; i<=rows; i++){
    let row = "";
    for(let j=1; j<=rows-i; j++){
        row+= "  ";
    }
    for(let k=1; k<= 2* i-1; k++){
        row+= "* "
    }
    console.log(row);
}
