// function removeDuplicates(arr){
//     let set = new Set();
//     for(let i=0; i<arr.length; i++){
//         set.add(arr[i]);
//     }
//     let size = set.size
//     console.log(size)
//     let index =0;

//     for(element of set){
//         arr[index++] = element;
//     }
//     return size;
// }

// let arr = [1,1,2,2,2,3,5,5];
// let size = removeDuplicates(arr);
// console.log(arr.slice(0,size));

function removeDuplicates(arr){
    if (arr.length === 0) return;
    let i=0;
    for(let j=1; j<arr.length; j++){
        // console.log(arr[j])
        if(arr[j] !== arr[i]){
            i++;
            arr[i] = arr[j];
        }
    }
    return i+1
}


let arr = [1,1,2,2,3,4,5,5];
const size = removeDuplicates(arr)
console.log(arr.slice(0, size))
