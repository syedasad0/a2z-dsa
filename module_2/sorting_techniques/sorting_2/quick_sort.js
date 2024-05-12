
function partition(arr, low, high) {
    // Selecting the pivot element (in this implementation, the rightmost element)
    let pivot = arr[high];

    // Initializing the index of the smaller element
    let i = low - 1;

    // Iterating through the array from 'low' to 'high - 1'
    for (let j = low; j < high; j++) {
        // If the current element is less than or equal to the pivot
        if (arr[j] <= pivot) {
            // Increment the index of the smaller element
            i++;

            // Swap arr[i] and arr[j] to move the smaller element to the left side
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    // After the loop, swap the pivot element (which is at index 'high') with the element at index 'i + 1'
    let temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;

    // Return the index of the pivot element after partitioning
    return i + 1;
}

function quickSort(arr, low, high) {
    if (low < high) {
        let partitionIndex = partition(arr, low, high);
        quickSort(arr, low, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, high);
    }
    return arr;
}

let arr = [4,1,7,9,3];
let low = 0;
let high = arr.length - 1;
console.log(quickSort(arr, low, high));