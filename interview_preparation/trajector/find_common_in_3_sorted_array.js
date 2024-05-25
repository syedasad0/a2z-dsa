//WAP to find the common elements from 3 sorted arrays

//Approach 1: Brute Force

function findCommonUsingBruteForce(arr1, arr2, arr3) {
    let commonArray = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                for (let k = 0; k < arr3.length; k++) {
                    if (arr2[j] == arr3[k]) {
                        commonArray.push(arr3[k])
                    }
                }
            }
        }
    }
    return commonArray;

}
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 5, 7, 9];
const arr3 = [1, 3, 4, 5, 8]; //Output = [1,5]
console.log(findCommonUsingBruteForce(arr1, arr2, arr3));


//Approach 2: Using Sets

function findCommonUsingSet(arr1, arr2, arr3) {
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);
    let set3 = new Set(arr3);
    const commonArray = [];
    set1.forEach(element => {
        if (set2.has(element) && set3.has(element)) {
            commonArray.push(element);
        }
    })
    return commonArray;
}
const ar1 = [1, 2, 3, 4, 5];
const ar2 = [1, 2, 5, 7, 9];
const ar3 = [1, 3, 4, 5, 8]; //Output = [1,5]
console.log(findCommonUsingSet(ar1, ar2, ar3));

//Optimal Approach: Using 3 Pointers

function findCommonUsingPointers(arr1, arr2, arr3) {
    let i = 0; let j = 0; let k = 0;
    let commonArray = [];
    while (i < arr1.length && j < arr2.length && k < arr3.length) {
        if (arr1[i] == arr2[j] && arr2[j] == arr3[k]) {
            commonArray.push(arr1[i]);
            i++;
            j++;
            k++;
        } else if (arr1[i] < arr2[j]) {
            i++;
        } else if (arr2[j] < arr3[k]) {
            j++;
        } else {
            k++;
        }
    }
    return commonArray

}
const a1 = [1, 2, 3, 4, 5];
const a2 = [1, 2, 5, 7, 9];
const a3 = [1, 3, 4, 5, 8]; //Output = [1,5]
console.log(findCommonUsingPointers(arr1, arr2, arr3));
