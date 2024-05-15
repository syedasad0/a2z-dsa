function removeDuplicates(nums) {
    let set = new Set();
    for (let num of nums) {
        set.add(num);
    }
    let k = set.size;
    let index = 0;
    for (let num of set) {
        nums[index++] = num;
    }
    return k;
}

// Example usage:
let nums = [1, 1, 2, 2, 3, 4, 5, 5];
let k = removeDuplicates(nums);
console.log(nums.slice(0, k));  // Output: [1, 2, 3, 4, 5]
console.log(k);  // Output: 5