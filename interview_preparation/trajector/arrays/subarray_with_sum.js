//WAP to find subarray with given sum

function findSubArrayWithSum(arr, targetSum) {
  let start =0;
  let sum = 0;
  for(let end=0; end < arr.length; end++){
    sum = sum + arr[end];
    while(sum > targetSum && start <= end){
        sum = sum-arr[start];
        start++;
    }
    if(sum === targetSum){
        return arr.slice(start, end+1)
    }
  }
  return null
}

// Example usage:
const arr = [1, 2, 3, 7, 5];
const targetSum = 12;

console.log(findSubArrayWithSum(arr, targetSum));

