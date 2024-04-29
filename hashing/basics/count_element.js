//Given an array, we have found the number of occurrences of given element in the array.

//USING BRUTEFORCE O(N)

/*function countOccurance(arr, num){
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
console.log(countOccurance(arr, num));*/

function countOccurance(arr, num){
    // const maxSize = 1000000;
    const maxSize = 15;;

    let hashArray = new Array(maxSize).fill(0);
    for(let i=0; i<arr.length; i++){
        hashArray[arr[i]] = hashArray[arr[i]] + 1;
    }
    return hashArray[num];

}
let arr = [1,2,1,2,3,4,4,3,5,2,1];
let num=6;
console.log(countOccurance(arr, num));