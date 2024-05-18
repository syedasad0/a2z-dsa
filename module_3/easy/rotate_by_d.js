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
    let j = 0;
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

//Optimal Soulution [Complexity 2N]

function reverse(arr, start, end) {
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

function rotateLeft(arr, d) {
    let n = arr.length;
    d = d % n; // Handle cases where d > arr.length
    if (d === 0) return arr;

    reverse(arr, 0, d - 1);
    reverse(arr, d, n - 1);
    reverse(arr, 0, n - 1);
    //Use this for right rotation
    /*
    reverse(arr, 0, n - 1);
    reverse(arr, 0, d - 1);
    reverse(arr, d, n - 1);
    */
    return arr;
}

let a = [1, 2, 3, 4, 5];
let pos = 2;
console.log(rotateLeft(a, pos)); // Output: [3, 4, 5, 1, 2]


