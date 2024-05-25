//next_greater_element

function nextGreaterElements(arr) {
    let stack = [];
    let nge = new Array(arr.length).fill(-1);
    for (let i = 2 * arr.length - 1; i >= 0; i--) {
        let currentElement = arr[i % arr.length];
        while (stack.length != 0 && stack[stack.length - 1] <= currentElement) {
            stack.pop();
        }
        if (i < arr.length) {
            if (stack.length > 0) {
                nge[i] = stack[stack.length - 1];
            }
        }
        stack.push(currentElement)
    }
    return nge

}
const nums = [5, 7, 1, 2, 6, 0];
console.log(nextGreaterElements(nums))