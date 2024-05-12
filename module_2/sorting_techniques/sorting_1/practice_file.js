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
// function insertionSort(arr){
//     for(let i=1; i<arr.length; i++){
//         let current = arr[i];
//         let j=i-1;
//         while(j >=0 && arr[j] > current){
//             arr[j+1] = arr[j];
//             j--;
//         }
//         arr[j+1] = current;

//     }
//     return arr;

// }
// let arr= [13,46,24,52,20,9];
// console.log(insertionSort(arr));


function selectionSort(arr){
    for(let i=0; i<arr.length-1; i++){
        let mini = i;
        for(let j=i+1; j<arr.length ;j++){
            if(arr[j] < arr[mini]){
                mini = j;
            }
            if(mini !== i){
                let temp = arr[i];
                arr[i] = arr[mini];
                arr[mini] = temp;
            }
        }
    
    }
    return arr

}
let arr = [13,46,24,52,20,9];
console.log(`Selection Sort: ${selectionSort(arr)}`);

function insertionSort(arr){
    for(let i=1; i< arr.length; i++){
        let j = i-1;
        let current = arr[i];
        while(j >= 0 && arr[j] > current){
            arr[j+1] = arr[j];
            j--;
        }

        arr[j+1] = current;
    }
    return arr;

}
let arr2 = [13,46,24,52,20,9];
console.log(`Insertion Sort: ${insertionSort(arr2)}`);

function bubbleSort(arr){
    for(let i=0; i<arr.length; i++){
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
let arr3 = [13,46,24,52,20,9];
console.log(`Bubble Sort: ${bubbleSort(arr3)}`);

function mergeSort(arr, low, high){
    if(low >= high){
        return;
    }
    let mid = Math.floor((low + high)/2);
    console.log(`low: ${low}, high: ${high}, mid: ${mid}`)
    mergeSort(arr, low, mid);
    mergeSort(arr, mid+1, high);
    merge(arr, low, mid, high);
    return arr;
}
function merge(arr, low, mid, high){
    let leftArray = arr.splice(0, low + 1);
    let rightArray = arr.splice(mid +1 , high + 1);

    let leftPointer =0;
    let rightPointer = 0;
    let currentIndex = low;

    while(leftPointer < leftArray.length && rightPointer < rightArray.length){
        if(leftArray[leftPointer] < rightArray[rightPointer]){
            arr[currentIndex] = leftArray[leftPointer];
            leftPointer++;
        }else{
            arr[currentIndex] = rightArray[rightPointer];
            rightPointer++;
        }
        currentIndex++;
    }

}
let arr4 = [13,46,24,52,20,9];
let low =0;
let high = arr4.length-1
console.log(`Merge Sort: ${mergeSort(arr4, low, high)}`);