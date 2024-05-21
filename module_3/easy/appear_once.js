//Given a non-empty array of integers arr, every element appears twice except for one. Find that single one.

//Approach 1: Brute Force
function checkAppearanceCount(arr) {
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] == num) {
                count++;
            }
        }
        if (count == 1) {
            return num
        }
    }

}
let arr = [4, 1, 2, 1, 2]
console.log(checkAppearanceCount(arr));

//Approach 2: Using Hashing

function appearOnce(arr) {
    let maximumNumber = arr[0];
    for (let i = 0; i < arr.length; i++) {
        maximumNumber = Math.max(maximumNumber, arr[i]);
    }
    let hashArray = new Array(maximumNumber + 1).fill(0);
    for (let i = 0; i < arr.length; i++) {
        hashArray[arr[i]]++;
    }
    for (let i = 0; i < hashArray.length; i++) {
        if (hashArray[i] == 1) {
            return i
        }
    }
    return -1

}
let a = [4, 1, 2, 4, 5, 1, 2]
console.log(appearOnce(a));

//Approach 3: Using Map Data Structures

function checkOccurance(arr) {
    let map = new Map();
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], (map.get(arr[i]) || 0) + 1);
    }
    for (const [num, count] of map) {
        if (count === 1) {
            return num;
        }
    }
    return -1;
}
let arr2 = [4, 1, 2, 4, 5, 1, 2]
console.log(checkOccurance(arr2));

//Approach 4: Using XOR

function checkOccur(arr){
    let xor =0;
    for(let i=0; i<arr.length; i++){
        xor = xor^arr[i];
    }
    return xor;

}
let arr3 = [4, 1, 2, 4, 5, 1, 2]
console.log(checkOccur(arr3));