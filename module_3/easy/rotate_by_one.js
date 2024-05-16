
//Given an array of N integers, left rotate the array by one place.

function rotateByOne(arr){
    let temp = arr[0];
    for(let j=1; j<arr.length; j++){
        arr[j-1] = arr[j];
    }
    arr[arr.length-1] = temp;
    return arr;

}
let arr = [1,2,3,4,5]
console.log(rotateByOne(arr));