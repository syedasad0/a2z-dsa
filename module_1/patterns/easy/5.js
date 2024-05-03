/*

* * * * *
* * * *
* * *
* *
*

*/

// for(let i=5; i>0; i--){
//     let row = "";
//     for(let j=0; j<i; j++){
//         row+= "* ";
//     }
//     console.log(row);
// }

//Another method

/*
1 -> 5 starts (5 - 1 + 1) = (n - i + 1) = 5 stars
2 -> 4 stars  (5 - 2 + 1) = (n - i + 1) = 4 stars
3 -> 3 stars  (5 - 3 + 1) = (n - i + 1)  = 3 stars
4 -> 2 stars
5 -> 1 stars
*/

for(let i=1; i<=5; i++)
{
let row = "";
 for(let j=1; j<=5-i + 1; j++){
    row+= "* ";
 }
 console.log(row);
}