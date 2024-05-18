//Given an array of integers, left rotate array of elements by d places either left or right.either left or right.

//Approach 1: Brute Force
function rotateByD(arr, d, n) {
    d = d % n;
    let temp = new Array(d).fill(0);
    for (let i = 0; i < d; i++) {
        temp[i] = arr[i];
    }
    console.log('temp==>', temp)
    for (let i = d; i < n; i++) {
        arr[i - d] = arr[i];
    }
    console.log('arr===>', arr);
    for (let i = 0; i < d; i++) {
        arr[n - d + i] = temp[i];
    }

    return arr;
}
let arr = [1, 2, 3, 4, 5];
let d = 3
let n = arr.length;
//[4,5,1,2,3]
console.log(rotateByD(arr, d, n));