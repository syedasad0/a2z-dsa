
function insertionSort(arr){
    for(let i=1; i<arr.length; i++){
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
let arr = [13, 46, 24, 52, 20, 9];
console.log(insertionSort(arr));

//USING RECURSION

function insertionSortUsingRecursion(arr, n) {
    if (n <= 1) return arr;

    insertionSortUsingRecursion(arr, n - 1);
    let key = arr[n - 1];
    let j = n - 2;
    console.log(`key:: ${key}, j:: ${j}, n:: ${n}`)

    while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
    }

    arr[j + 1] = key;

    return arr;
}

let arr2 = [13, 46, 24, 52, 20, 9];
console.log(insertionSortUsingRecursion(arr2, arr2.length));
