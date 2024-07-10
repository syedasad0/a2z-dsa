function findLeader(arr){
  let leader = arr[arr.length-1];
  let leaderArr = [];
  leaderArr.push(leader);
  for(let i = arr.length-1; i>0; i--){
    if(arr[i] > leader){
      leaderArr.push(arr[i]);
      leader = arr[i];
    }
  }
  return leaderArr
}
function reverse(arr, first, last){
  
}
const arr = [10, 22, 12, 3, 0, 6]; //Output: [22,12,6]
console.log(findLeader(arr));
