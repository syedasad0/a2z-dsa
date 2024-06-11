//WAP to find the square of a sorted array
function sortedSquares(arr){
    let sortedSquares = new Array(arr.length);
    let left = 0;
    let right = arr.length - 1;
    let pos = arr.length - 1;

    while (left <= right){
        const leftSquare = arr[left] * arr[left];
        const rightSquare = arr[right] * arr[right];

        if(leftSquare > rightSquare){
            sortedSquares[pos] = leftSquare;
            left++;
        }else{
            sortedSquares[pos] = rightSquare;
            right--;
        }
        pos--;
    }
    return sortedSquares

}
const arr = [-4, -1, 0, 3, 10];
console.log(sortedSquares(arr)); // Output: [0, 1, 9, 16, 100] 