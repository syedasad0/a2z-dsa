/*

*
* * 
* * * 
* * * *
* * * * *
* * * *
* * *
* *
*

*/

function printPattern(rows) {
    for (let i = 1; i <= (2 * rows) - 1; i++) {
        let stars = i;
        if(i>rows) {stars= 2*rows-i};
        for (let j = 1; j <= stars; j++) {
            process.stdout.write("* ");
        }
        for (let k = 1; k < i; k++) {
            process.stdout.write("  ");
        }
        console.log();
    }

}

printPattern(5);