function bubbleSort(arr){

    for(let i=0; i<arr.length; i++){
        for(j=i+1; j<arr.length; j++){
            if(arr[j]<arr[i]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;

}


const arr = [10,4,5,78, 9,12,13];
console.log(bubbleSort(arr));