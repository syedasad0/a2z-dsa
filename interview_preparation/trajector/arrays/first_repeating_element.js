/* Given an array arr[] of size n, find the first repeating element. The element should occur 
more than once and the index of its first occurrence should be the smallest. */

//Approach 1: Brute Force (N^2)
function firstRepeatingElement(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                return i + 1;
            }
        }
    }
    return -1

}

const arr = [1, 5, 3, 4, 3, 5, 6]; //Output: 2
console.log(firstRepeatingElement(arr));

//Approach 2: Hashing
function firstRepeatingElementUsingHashing(arr) {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], (map.get(arr[i]) || 0) + 1);
        if(map.get(arr[i]) == 2){
            return map.get(arr[i]);
        }
    }
    return -1

}

const a = [1, 2, 3, 4]; //Output: -1
console.log(firstRepeatingElementUsingHashing(a));