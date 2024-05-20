
/*Given an integer N and an array of size N-1 containing N-1 numbers between 1 to N.
 Find the number(between 1 to N), that is not present in the given array. */

 //Approach 1: Brute Force
 function findMissingUsingBruteForce(arr, num) {
    for (let i = 1; i <= num; i++) {
        let found = false;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === i) {
                found = true;
                break;
            }
        }
        if (!found) {
            return i;
        }
    }
    return -1; // This line should never be reached if the input is valid
}

let arr = [1, 2, 4, 5];
let n = 5; // Output: 3
console.log(findMissingUsingBruteForce(arr, n));


//Approach 2: Better Approach Using Hashing Complexity: Approx. 2N

function findMissingUsingHashing(arr, num){
    let hashArray = new Array(num+1).fill(0);
    for(let i=0; i<arr.length; i++){
        hashArray[arr[i]] = 1;
    }
    // console.log(`hashArray:: ${hashArray}`)
    for(let i=1; i<hashArray.length; i++){
        if(hashArray[i] == 0){
            return i;
        }
    }
    return -1
}
let ar = [1,2,4,5];
let num = 5;
console.log(findMissingUsingHashing(ar, num));

//Approach 3: Optimal Solution using Summation Approach

function findMissingUsingSummationApproach(arr, num){
    let sumOfNum = (num * (num + 1))/2;
    let sumOfArr = 0;
    for(let i=0; i<arr.length; i++){
        sumOfArr = sumOfArr + arr[i];
    }
    let missingNumber = sumOfNum - sumOfArr;
    return missingNumber 

}
let a = [1,2,4,5];
let number = 5;
console.log(findMissingUsingSummationApproach(a, number))
