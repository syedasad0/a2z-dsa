//Given an array that contains only 1 and 0 return the count of maximum consecutive ones in the array.

//Approach 1: Brute Force
function findConsecutive(arr){
    let count = 0;
    let maxCount = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] == 1){
            count++;
            if(count > maxCount) {
                maxCount = count
            }
        }else{
            count =0;
        }
    }
    return maxCount;

}
let arr = [1, 1, 0, 1, 1, 1];
console.log(findConsecutive(arr));