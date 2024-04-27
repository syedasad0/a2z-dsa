//WAP to print linearly from 1 to N using recursion
//Printing the number after the recursive function call (backtracking)

function printOneToN(i, n){
    if(i<1) return;
    else{
        printOneToN(i-1, n);
        console.log(i);
    }
}

let n=5
printOneToN(n, n);