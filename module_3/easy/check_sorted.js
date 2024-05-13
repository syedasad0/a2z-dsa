/* Given an array of size n, write a program to check if the given array is sorted in (ascending / Increasing / Non-decreasing) order or not. 
If the array is sorted then return True, Else return False. */

function checkSorted(arr){
    for(let i =1; i<arr.length; i++){
        if(arr[i] <= arr[i-1] ){
            return false
        }
    }
    return true

}
let arr = [3,2,4,1];
console.log(checkSorted(arr))

