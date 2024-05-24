//Given an array of integers arr[] and an integer target.

function twoSum(arr, target) {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        let diff = target - arr[i];
        if (map.has(diff)) {
            // return [map.get(diff), i]; //to return the index
            return [diff, arr[i]]; //to return value

        } else {
            map.set(arr[i], i);
        }
    }
    return [];
}
/*
2=> 0
6=> 1
5=> 2
8 => diff present 
return diff, arr[i]*/
let arr = [2, 6, 5, 8, 11];
let target = 14;
console.log(twoSum(arr, target));