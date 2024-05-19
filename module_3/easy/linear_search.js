//Given an array, and an element num the task is to find if num is present in the given array or not. If present print the index of the element or print -1.

function linerSearch(arr, num){
    for(let i=0; i<arr.length; i++){
        if(arr[i] == num) return i;
    }
    return -1
}

arr = [2,3,5,8,10];
let num=10;
console.log(linerSearch(arr, num));