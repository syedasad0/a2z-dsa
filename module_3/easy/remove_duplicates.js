/*Given an integer array sorted in non-decreasing order, 
remove the duplicates in place such that each unique element appears only once. The relative order of the elements should be kept the same.*/

//BRUTE FORCE

function removeDuplicates(arr){
    let set = new Set();
    for(let i=0; i<arr.length; i++){
        set.add(arr[i]);
    }
    let size = set.size
    let index =0;

    for(element of set){
        arr[index++] = element;
    }
    return size;
}

let arr = [1,1,2,2,2,3,5,5];
let size = removeDuplicates(arr);
console.log(arr.slice(0,size));


//OPTIMAL: Two Pointers Approaach

function removeDuplicates2(arr){
    if (arr.length === 0) return;
    let i=0;
    for(let j=1; j<arr.length; j++){
        if(arr[j] !== arr[i]){
            i++;
            arr[i] = arr[j];
        }
    }
    return i+1
}


let arr2 = [1,1,2,2,3,4,5,5];
const size2 = removeDuplicates2(arr2)
console.log(arr2.slice(0, size2))
