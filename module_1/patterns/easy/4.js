/*

1
2 2
3 3 3
4 4 4 4
5 5 5 5 5

*/

for(let i=1; i<=5; i++){
    let row = "";
    for(let j =1; j<=i; j++){
        row+= i + " ";
    }
    console.log(row);
}