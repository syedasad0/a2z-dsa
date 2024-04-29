//Given an array, we have found the number of occurrences of given element in the array.

//USING BRUTEFORCE O(N)

function countOccurance(arr, num){
    let count =0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] == num){
            count++;
        }
    }
    return count;

}
let arr = [1,2,1,2,3,4,4,3,5,2,1];
let num=4;
console.log(countOccurance(arr, num));