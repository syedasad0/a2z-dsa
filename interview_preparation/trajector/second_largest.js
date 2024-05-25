/*APPROACH 1: BRUTE FORCE 
(Sort the array in asc order, store n-1 value in largest variable iterate array from end and check if arr[i] !== largest once condition matches brek;) */


//Optimal Approach [Complexity: N] 
function findSecondLargest(arr){
    let largest = arr[0];
    let secondLargest = -1;
    for(let i=1; i<arr.length; i++){
        if(arr[i] > largest){
            secondLargest = largest;
            largest = arr[i];
        }else if (arr[i] > secondLargest && arr[i] !== largest) { // Check if the current element is greater than secondLargest
            secondLargest = arr[i];
        }
    }
    return secondLargest

}
arr = [5, 6, 3, 9, 7, 4];
console.log(findSecondLargest(arr));