//APPROACH 1:: BRUTE FORCE [Sort the array in ascending order and get element at n-1 position] [Complexity: N^2]


//OPTIMAL SOLUTION [Complexity: N]
function findLargest(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];

        }
    }
    return largest;
}
let arr = [5, 6, 3, 9, 7, 4];
console.log(findLargest(arr));