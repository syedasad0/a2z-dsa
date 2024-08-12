// function bubbleSort(arr){

//     for(let i=0; i<arr.length; i++){
//         for(j=i+1; j<arr.length; j++){
//             if(arr[j]<arr[i]){
//                 let temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     return arr;

// }
// function selectionSort(arr){
//     for(i=0; i<arr.length-1; i++){
//         let minimum = i;
//         for(let j = i+1; j<arr.length; j++){
//             if(arr[j] < arr[minimum]){
//                 minimum = j;
//             }
//         }

//         if(minimum !== i){
//             let temp = arr[minimum];
//             arr[minimum] = arr[i];
//             arr[i] = temp;
//          }
//     }
//     return arr;
// }


function insertionSort(arr){
    for(let i = 0; i<arr.length; i++){
        let j = i;
        while(j > 0 && arr[j-1] > arr[j]){
            let temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;
            j--;
        }
    }
    return arr;
}

const arr = [23, 1, 10, 5, 2];
console.log(insertionSort(arr));
