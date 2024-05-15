//BRUTE FORCE

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


//OPTIMAL: Two Pointers Approaach

function removeDuplicates2(nums) {
    if (nums.length === 0) return 0; // Edge case: empty array
    
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}

// Example usage:
let nums2 = [1, 1, 2, 2, 3, 4, 5, 5];
let k2 = removeDuplicates(nums2);
console.log(nums2.slice(0, k2));  // Output: [1, 2, 3, 4, 5]
console.log(k2);  // Output: 5
