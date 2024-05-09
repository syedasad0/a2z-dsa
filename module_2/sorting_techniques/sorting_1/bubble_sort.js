function bubbleSort(arr){
    for(let i=0; i<arr.length-1; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[j] < arr[i]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;

}
const arr = [13, 46, 24, 52, 20, 9];
console.log(bubbleSort(arr));