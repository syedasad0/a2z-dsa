
function findLeader(arr) {
    let leaderArr = [];
    let leader = arr[arr.length - 1];
    console.log('leader: ', leader)
    leaderArr.push(leader);
    console.log('leaderArr: ', leaderArr);
    for (let i = arr.length - 2; i >= 0; i--) {
        console.log(arr[i]);
        if (arr[i] > leader) {
            leader = arr[i];
            leaderArr.unshift(leader);
        }
    }
    return leaderArr
}

const arr = [4,9,7,10,5,8,4,2];
console.log(`Leader Array: ${findLeader(arr)}`);