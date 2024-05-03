//Given an array, we need to found the number of occurrences of each element in the array.

function countOccurance(arr){
    let map = new Map();
    for(let i=0; i<arr.length; i++){
        let count = map.get(arr[i]) || 0;
        map.set(arr[i], count+1)
    }
    return map;

}
let arr = [1,2,3,2,3,4,1,'a','a',5,4,6,5,6,4,7];
console.log(countOccurance(arr));