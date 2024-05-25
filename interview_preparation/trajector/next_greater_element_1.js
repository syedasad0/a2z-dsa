/*Given a circular integer array A, return the next greater element for every element in A. The next greater element for an element x is the first element greater than x
that we come across while traversing the array in a clockwise manner. If it doesn't exist, return -1 for this element. */

function nextGreaterElements(nums) {
    console.log(`nums: ${nums}`)
    const n = nums.length;
    const nge = new Array(n).fill(-1);
    const stack = [];
    console.log(`nge: ${nge}`);

    for (let i = 2 * n - 1; i >= 0; i--) {
        console.log(`i= ${i}, n = ${n}`)
        const currentElement = nums[i % n];
        console.log(`currentElement: ${currentElement}`);
        console.log(`stack[stack.length - 1] : ${stack[stack.length - 1]}`);
        console.log(`stack: ${stack}`);
        while (stack.length > 0 && stack[stack.length - 1] <= currentElement) {
            stack.pop();
        }
        console.log(`stack after pop: ${stack}`);


        if (i < n) {
            if (stack.length > 0) {
                nge[i] = stack[stack.length - 1];
            }
        }
        console.log(`nge after: ${nge}`)
        stack.push(currentElement);
        console.log(`stack after push: ${stack}`);

    }

    return nge;
}

// Example usage
const nums = [5, 7, 1, 2, 6, 0];
const res = nextGreaterElements(nums);
console.log("The next greater elements are:", res.join(" "));
