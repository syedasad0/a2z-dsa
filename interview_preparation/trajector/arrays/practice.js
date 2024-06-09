/*
//find common in 3 sorted arrays
//Brute
function findCommon(arr1, arr2, arr3){
  let commonAray = [];
  for(let i=0; i<arr1.length; i++){
    for(let j=0; j< arr2.length; j++){
      if(arr1[i] == arr2[j]){
        for(let k=0; k<arr3.length; k++){
          if(arr3[k] == arr2[j]){
            commonAray.push(arr3[k]);
          }
        }
      }
    }
  }
  return commonAray;
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 5, 7, 9];
const arr3 = [1, 3, 4, 5, 8]; //Output = [1,5]
console.log(findCommon(arr1, arr2, arr3));
//Better
function findCommonUsingSets(arr1, arr2, arr3){
  let set1 = new Set(arr1);
  let set2 = new Set(arr2);
  let set3 = new Set(arr3);
  let commonArray = [];
  set1.forEach(element => {
    if(set2.has(element) && set3.has(element)){
      commonArray.push(element);
    }
  })
  return commonArray;
}
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 5, 7, 9];
const arr3 = [1, 3, 4, 5, 8]; //Output = [1,5]
console.log(findCommonUsingSets(arr1, arr2, arr3));

//Optimal
function findCommon(arr1, arr2, arr3){
  let i = 0; 
  let j = 0;
  let k = 0;
  let commonAray = [];
  while(i < arr1.length && j < arr2.length && k < arr3.length){
    if(arr1[i] == arr2[j] && arr2[j] == arr3[k]){
      commonAray.push(arr1[i]);
      i++;
      j++;
      k++;
    }else if(arr1[i] < arr2[j]){
      i++;
    }else if(arr2[j] < arr3[k]){
      j++;
    }else{
      k++;
    }
  }
  return commonAray;

}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 5, 7, 9];
const arr3 = [1, 3, 4, 5, 8]; //Output = [1,5]
console.log(findCommon(arr1, arr2, arr3));
*/


//WAP to find an element in rotated sorted array
/*
function findElement(arr, target){
  let left = 0;
  let right = arr.length - 1;
  while(left <= right){
    let mid = Math.floor(left + right)/2;
    if(arr[mid] === target){
      return mid;
    }
    if(arr[left] < arr[mid]){
      if(arr[left] <= target && target < arr[mid]){
        right = mid - 1;
      }else{
        left = mid + 1;
      }
    }else{
      if(arr[mid] < target && target <= arr[right]){
        left = mid + 1;
      }else{
        right = mid -1;
      }
    }
  }
  return -1

}
const nums = [4, 5, 6, 7, 0, 1, 2];
const target = 7;
console.log(findElement(nums, target))


//Brute Force
function findFirstRepeatingElement(arr){
  for(let i=0; i < arr.length; i++){
    for(let j = i+1; j< arr.length; j++){
      if(arr[i] === arr[j]){
        return i+1;
      }
    }
  }
  return -1

}
const arr = [1, 5, 3, 4, 3, 5, 6]; //Output: 2
console.log(findFirstRepeatingElement(arr));

//Hashing

function findFirstRepeatingElementUsingHashMap(arr){
  let map = new Map();
  for(let i = 0; i < arr.length; i++){
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
    if(map.get(arr[i]) == 2){
      return map.get(arr[i]);
    }
  }
  return -1

}
const arr2 = [1, 5, 3, 4, 3, 5, 6]; //Output: 2
console.log(findFirstRepeatingElementUsingHashMap(arr2));
*/