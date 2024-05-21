//Given two sorted arrays arr1 and arr2 find intersection

//Brute Force Approach
function intersectionBruteForce(arr1, arr2) {
    let intersection = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                // To avoid duplicates in the intersection array, check if it's already present
                if (intersection.length === 0 || intersection[intersection.length - 1] !== arr1[i]) {
                    intersection.push(arr1[i]);
                }
                break; // Move to the next element in arr1
            }
        }
    }
    return intersection;
}
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [2, 3, 4, 4, 5];
console.log(intersectionBruteForce(arr1, arr2)); // Output: [2, 3, 4, 5]


//Optimal Solution using 2 pointers approach

function intersectionTwoPointers(arr1, arr2) {
    let i = 0, j = 0;
    let intersection = [];
    
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] === arr2[j]) {
            // To avoid duplicates in the intersection array, check if it's already present
            if (intersection.length === 0 || intersection[intersection.length - 1] !== arr1[i]) {
                intersection.push(arr1[i]);
            }
            i++;
            j++;
        } else if (arr1[i] < arr2[j]) {
            i++;
        } else {
            j++;
        }
    }
    
    return intersection;
}

// Example usage:
let a1 = [1, 2, 3, 4, 5];
let a2 = [2, 3, 4, 4, 5];
console.log(intersectionTwoPointers(a1, a2)); // Output: [2, 3, 4, 5]