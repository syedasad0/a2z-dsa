function partition(arr, low, high) {
    let pivot = arr[low];
    let i = low;
    let j = high;

    while (i < j) {
        while (arr[i] <= pivot && i <= high) {
            i++;
        }

        while (arr[j] > pivot && j >= low) {
            j--;
        }
        
        if (i < j) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    
    let temp = arr[low];
    arr[low] = arr[j];
    arr[j] = temp;
    
    return j;
}

function quickSort(arr, low, high) {
    if (low < high) {
        let pIndex = partition(arr, low, high);
        quickSort(arr, low, pIndex - 1);
        quickSort(arr, pIndex + 1, high);
    }
    
    return arr;
}

let array = [4, 6, 2, 5, 7, 9, 1, 3];
let low =0;
let high = array.length-1;
console.log("Sorted Array:", quickSort(array, low, high)); 
