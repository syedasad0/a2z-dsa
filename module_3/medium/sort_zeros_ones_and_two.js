//Given an array consisting of only 0s, 1s, and 2s. Write a program to in-place sort the array without using inbuilt sort functions. ( Expected: Single pass-O(N) and constant space)

//Approach 1 Complexity: 2N

function sort(arr) {
    let count = [0, 0, 0];
    // for(let num of arr){
    //     count[num]++;
    // }
    for (let i = 0; i < arr.length; i++) {
        count[arr[i]]++;
    }
    let index = 0;
    for (let i = 0; i < count[0]; i++) {
        arr[index++] = 0
    }
    for (let i = 0; i < count[1]; i++) {
        arr[index++] = 1
    }
    for (let i = 0; i < count[1]; i++) {
        arr[index++] = 2
    }
    return arr;
}
let arr = [2, 0, 2, 1, 1, 0]
console.log(sort(arr));

//Approach 2: Optimal Solution Dutch National Flag Algoritm 