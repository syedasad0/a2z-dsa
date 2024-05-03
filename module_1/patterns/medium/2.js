/*

* * * * * * * * *
  * * * * * * *
    * * * * *
      * * *
        * 
*/

// let rows =5;
// for(let i=5; i>=1 ; i--){
//     let row = "";
//        for(let k =1; k<=rows-i; k++){
//         row+= "  "
//     }
//     for(let j = 1; j<= 2*i-1; j++){
//         row+= "* ";
//     }
//     console.log(row)
// }

function printPattern(rows) {
    // Iterate over each row
    for (let i = 0; i < rows; i++) {
        // Print leading spaces
        for (let j = 0; j < i; j++) {
            process.stdout.write("  ");
        }
        
        // Print asterisks
        for (let k = 0; k < 2 * (rows - i) - 1; k++) {
            process.stdout.write("* ");
        }

        for (let l = 0; l < i; l++) {
            process.stdout.write("  ");
        }
        
        
        // Move to the next line
        console.log();
    }
}

// Call the function with the number of rows
printPattern(5);


