
function mergeSort(arr, low, high) {
    console.log(`arr: ${arr}, low: ${low}, high: ${high}`);
    if (low >= high) {
        return;
    }
    const mid = Math.floor((low + high) / 2);
    console.log('mid:', mid)

    mergeSort(arr, low, mid); // Sort the left half
    mergeSort(arr, mid + 1, high); // Sort the right half

    merge(arr, low, mid, high); // Merge the sorted halves
    return arr
}

function merge(arr, low, mid, high) {
    const leftArray = arr.slice(low, mid + 1); // Left subarray
    const rightArray = arr.slice(mid + 1, high + 1); // Right subarray
    console.log('leftArray====>', leftArray, typeof leftArray);
    console.log('rightArray====>', rightArray, typeof rightArray);


    let leftIndex = 0;
    let rightIndex = 0;
    let currentIndex = low;

    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
        if (leftArray[leftIndex] <= rightArray[rightIndex]) {
            arr[currentIndex] = leftArray[leftIndex];
            leftIndex++;
        } else {
            arr[currentIndex] = rightArray[rightIndex];
            rightIndex++;
        }
        currentIndex++;
    }

    // Copy the remaining elements of leftArray and rightArray
    while (leftIndex < leftArray.length) {
        arr[currentIndex] = leftArray[leftIndex];
        leftIndex++;
        currentIndex++;
    }

    while (rightIndex < rightArray.length) {
        arr[currentIndex] = rightArray[rightIndex];
        rightIndex++;
        currentIndex++;
    }
}

// Example usage:
const arr = [4, 1, 3, 9, 7];
// const arr = [3,2,1]
let low = 0;
let high = arr.length - 1;
console.log(mergeSort(arr, low, high)); 