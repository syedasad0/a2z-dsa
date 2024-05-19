//You are given an array of integers, your task is to move all the zeros in the array to the end of the array and move non-negative integers to the front by maintaining their order.

//Brute Force Approach
function moveZeros(arr) {
    let temp = new Array();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != 0) {
            temp.push(arr[i])
        }
    }
    console.log(`temp array::: ${temp}`)
    for (let i = 0; i < temp.length; i++) {
        arr[i] = temp[i];
    }
    console.log(`modified arr::: ${arr}`)
    for (let i = temp.length; i < arr.length; i++) {
        arr[i] = 0;
    }
    return arr;

}
let arr = [0, 0, 1, 0, 2, 3, 4, 0, 5, 0, 7];
console.log(moveZeros(arr));

//Optimal Approach - Using Two Pointers

function moveZeroToEnd(arr) {
    let j = -1;
    for (let i = 0; i < arr.length; i++) {
        if (a[i] === 0) {
            j = i;
            break;
        }
    }
    if (j == -1) return arr;

    for (i = j + 1; i < arr.length; i++) {
        if (arr[i] !== 0) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            j++;

        }

    }
    console.log(`arr::: ${arr}`)

}
let a = [3, 9, 0, 0, 1, 0, 2, 3, 4, 0, 5, 0, 7];
console.log(moveZeroToEnd(a))