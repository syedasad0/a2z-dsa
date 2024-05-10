// function selectionSort(arr){
//     for(let i=0; i< arr.length-1; i++){
//         let minimumIndex = i;
//         for(let j = i+1; j<arr.length; j++){
//             if(arr[j] < arr[minimumIndex]){
//                 minimumIndex = j
//             }
//             if(minimumIndex !== i){
//                 let temp = arr[i];
//                 arr[i] = arr[minimumIndex];
//                 arr[minimumIndex] = temp;
//             }
           
//         }
//     }
//     return arr;

// }

// let arr = [13, 46, 24, 52, 20, 9];
// console.log(selectionSort(arr));

//[23, 1, 10, 5, 2];
//loop1::: [1,23,10,5,2]
function insertionSort(arr){
    for(let i=1; i<arr.length; i++){
        let current = arr[i];
        let j=i-1;
        while(j >=0 && arr[j] > current){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = current;

    }
    return arr;

}
let arr= [13,46,24,52,20,9];
console.log(insertionSort(arr));