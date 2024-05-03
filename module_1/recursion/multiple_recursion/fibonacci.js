//USING NORMAL ITERATION
//Given an integer N. Print the Fibonacci series up to the Nth term.
function fibonacci(num){
    let fibonacciSeries = [0,1];
    for(let i=2; i<=num; i++){
        fibonacciSeries.push(fibonacciSeries[i-1] + fibonacciSeries[i-2]);
    }
    return fibonacciSeries;

}
let num=5;
console.log(fibonacci(num));

// /instead of printing the Fibonacci series till N, we’re going to print the Nth Fibonacci number using functional recursion with multiple function calls.
/*
The "nth Fibonacci number" refers to the number in the Fibonacci sequence that occupies the nth position. In other words, it's the number that appears at index n in the sequence.

The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. It starts with 0 and 1, and the subsequent numbers are obtained by adding the two previous numbers. So, the sequence goes: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, and so on.

For example:

The 0th Fibonacci number is 0.
The 1st Fibonacci number is 1.
The 2nd Fibonacci number is 1 (0 + 1 = 1).
The 3rd Fibonacci number is 2 (1 + 1 = 2).
The 4th Fibonacci number is 3 (1 + 2 = 3).
And so on.
So, when someone refers to the "nth Fibonacci number," they mean the number that appears at the nth position in the Fibonacci sequence.

*/

function fibonacciUsingRecursion(n){
    if(n<=1){
        return n; //if number is 0 or 1, fabonacci will be n
    }
    let last = fibonacciUsingRecursion(n-1);
    let secondLast = fibonacciUsingRecursion(n-2)
    return last + secondLast
}
let n = 6;
console.log(fibonacciUsingRecursion(n)); //Time Complexity: ~O(2^N) //exponential

//Using Loops

function fibonacciUsingLoop(n) {
    if (n <= 1) {
        return n;
    }
    
    let secondLast = 0;
    let last = 1;
    let fib = 0;
    
    for (let i = 2; i <= n; i++) {
        fib = last + secondLast;
        secondLast = last;
        last = fib;
    }
    
    return fib;
}

console.log(fibonacciUsingLoop(6));
