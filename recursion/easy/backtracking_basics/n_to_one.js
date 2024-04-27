//WAP to print linearly from N to 1 using recursion
//Printing the number after the recursive function call (backtracking)

function printNtoOne(i, n){
    console.log(`i = ${i}, n= ${n}`)
    if(i > n) return;
    else{
        printNtoOne(i+1, n);
        console.log(i);
    }

}
// let n=5;
printNtoOne(1, 5);
