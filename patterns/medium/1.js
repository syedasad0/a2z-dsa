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
// let rows = 5;
// for(let i=1; i<=rows; i++){
//     let row = "";
//     for(let j=1; j<=rows-i; j++){
//         row+= "  ";
//     }
//     for(let k=1; k<= 2* i-1; k++){
//         row+= "* "
//     }
//     console.log(row);
// }

/*[space, stars, space]
[4, 1, 4]
[3, 3, 3]
[2, 5, 2]*/

function printPattern(rows) {
  for (let i = 1; i <= rows; i++) {
      //printing spaces
      for (let j = 1; j <= rows - i; j++) {
          process.stdout.write("  ");
      }
      //printing stars
      for (let k = 1; k <= 2 * i - 1; k++) {
          process.stdout.write("* ");
      }
      //printing spaces
      for (let j = 1; j <= rows - 1; j++) {
          process.stdout.write("  ");
      }
      console.log();
  }
}

printPattern(5);