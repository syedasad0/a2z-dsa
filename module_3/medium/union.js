//Given two sorted arrays, arr1, and arr2 of size n and m. Find the union of two sorted arrays.
function union(arr1, arr2){
    let temp = [...arr1, ...arr2];
    let set = new Set();
    for(let i=0; i<temp.length; i++){
        set.add(temp[i]);
    }
    temp = [...set];

    return temp;
}
let arr1 = [1,2,3,4,5,6,7,8,9,10];
let arr2 = [2,3,4,4,5,11,12];
console.log(union(arr1, arr2));