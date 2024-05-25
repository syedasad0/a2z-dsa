//Given an array, print all the elements which are leaders. A Leader is an element that is greater than all of the elements on its right side in the array.

//Approach 1: Brute Force

function findLeadersUsingBruteForce(arr) {
    let leaderArr = [];
    for (let i = 0; i < arr.length; i++) {
        let leader = true;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > arr[i]) {
                leader = false;
                break;
            }
        }
        if (leader == true) {
            leaderArr.push(arr[i]);
        }
    }
    return leaderArr

}
const arr = [10, 22, 12, 3, 0, 6]; //Output: [22,12,6]
console.log(findLeadersUsingBruteForce(arr));

//Approach 2: Traversing Backwards

function findLeader(arr){
    let leaderArray = [];
    let leader = arr[arr.length-1];
    leaderArray.push(leader);
    for(let i= arr.length-2; i>=0; i--){
        if(arr[i] > leader){
            leaderArray.push(a[i]);
            leader = a[i]
        }
    }
    reverse(leaderArray, 0, leaderArray.length-1 ) //if to return in order
    return leaderArray;
}
function reverse(arr, first, last){
    while(first < last){
        let temp = arr[first];
        arr[first] = arr[last];
        arr[last] = temp;
        first++;
        last--;
    }
}
const a = [10, 22, 12, 3, 0, 6]; //Output: [22,12,6]
console.log(findLeader(a));