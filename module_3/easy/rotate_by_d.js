//Given an array of integers, left rotate array of elements by d places either left or right.either left or right.

//Approach 1: Brute Force
function rotateByD(arr, d) {
    d = d % arr.length;
    let temp = new Array(d).fill(0);
    for (let i = 0; i < d; i++) {
        temp[i] = arr[i];
    }
    console.log('temp==>', temp)
    for (let i = d; i < arr.length; i++) {
        arr[i - d] = arr[i];
    }
    console.log('arr===>', arr);
    let j=0;
    for (let i = arr.length - d; i < arr.length; i++) {
        arr[i] = temp[j];
        j++;
    }

    return arr;
}
let arr = [1, 2, 3, 4, 5];
let d = 2
//[3,4,5,1,2]
console.log(rotateByD(arr, d));