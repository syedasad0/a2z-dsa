//Given an array of size N. Find the highest and lowest frequency element.

function findFrequency(){
    let map = new Map();
    for(let i=0; i< arr.length; i++){
        let count = map.get(arr[i]) || 0;
        (arr[i], count = count + 1);
    }
    let values = [...map.values()];

    return `Max Value: ${Math.max(...values)} and Lowest value: ${Math.min(...values)}`;
}
let arr = [1,1,2,3,3,3];
console.log(findFrequency(arr));