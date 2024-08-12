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
function selectionSort(arr){
    for(i=0; i<arr.length-1; i++){
        let minimum = i;
        for(let j = i+1; j<arr.length; j++){
            if(arr[j] < arr[minimum]){
                minimum = j;
            }
        }

        if(minimum !== i){
            let temp = arr[minimum];
            arr[minimum] = arr[i];
            arr[i] = temp;
         }
    }
    return arr;
}

const arr = [10, 4, 5, 78, 9, 12, 13];
console.log(selectionSort(arr));
