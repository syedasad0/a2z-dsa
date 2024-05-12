function bubbleSort(arr, n) {
    if (n == 1) {
        return arr;
    }
    for(let j=0; j< arr.length; j++){
        if(arr[j] > arr[j+1]){
            temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp; 
        }
    }
    console.log(`arrr=>`, arr);
    bubbleSort(arr, n-1);
    return arr
}
let arr = [13, 46, 24, 52, 20, 9];
console.log(bubbleSort(arr, arr.length));