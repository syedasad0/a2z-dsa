/*

1 2 3 4 5
1 2 3 4
1 2 3
1 2 
1

*/
//Method 1 (n-i +1)
for(let i=1; i<=5; i++){
    let row = "";
    for(let j =1; j<= 5-i + 1; j++){
        row+= j + " ";
    }
    console.log(row);
}

//Method 2
for(let i=5; i>0; i--){
    let row = "";
    for(let j=1; j<=i; j++){
        row+= j + " "; 
    }
    console.log(row);
}