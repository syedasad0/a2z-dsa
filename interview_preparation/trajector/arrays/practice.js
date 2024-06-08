// //next_greater_element

// function nextGreaterElements(arr) {
//     let stack = [];
//     let nge = new Array(arr.length).fill(-1);
//     for (let i = 2 * arr.length - 1; i >= 0; i--) {
//         let currentElement = arr[i % arr.length];
//         while (stack.length != 0 && stack[stack.length - 1] <= currentElement) {
//             stack.pop();
//         }
//         if (i < arr.length) {
//             if (stack.length > 0) {
//                 nge[i] = stack[stack.length - 1];
//             }
//         }
//         stack.push(currentElement)
//     }
//     return nge

// }
// const nums = [5, 7, 1, 2, 6, 0];
// console.log(nextGreaterElements(nums))


// //find element in rotated sorted array

// function findElementInRotatedSortedArray(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);
//         if (arr[mid] == target) {
//             return mid;
//         }
//         if (arr[left] <= arr[mid]) {
//             if (arr[left] <= target && target < arr[mid]) {
//                 right = mid - 1;
//             }else{
//                 left = mid + 1;
//             }
//         }else{
//             if(arr[mid] <= target && target < arr[right]){
//                 left = mid +1;
//             }else{
//                 right = mid -1;
//             }
//         }
//     }
//     return -1
// }
// const arr = [4, 5, 6, 7, 0, 1, 2];
// const target = 0;
// console.log(findElementInRotatedSortedArray(arr, target))

// console.log('Start');
// setImmediate(() => {
//     console.log('Inside setImmediate');
// });
// console.log('End');
Array.prototype.add = function(){
  if(this.length == 0){
    return 0;
  }
  let result = this[0];
  for(let i=1; i<this.length; i++){
    result = result + this[i];
  }
  return result
}

const arr = [2,3,4];
console.log(arr.add());