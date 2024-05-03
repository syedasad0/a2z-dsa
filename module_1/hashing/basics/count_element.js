//Given an array, we have found the number of occurrences of given element in the array.

//USING BRUTEFORCE O(N)

/*function countOccurance(arr, num){
    let count =0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] == num){
            count++;
        }
    }
    return count;

}
let arr = [1,2,1,2,3,4,4,3,5,2,1];
let num=4;
console.log(countOccurance(arr, num));*/

//USING HASH ARRAY

function countOccurance(arr, num){
    // const maxSize = 1000000;
    const maxSize = 15;;

    let hashArray = new Array(maxSize).fill(0);
    for(let i=0; i<arr.length; i++){
        hashArray[arr[i]] = hashArray[arr[i]] + 1;
    }
    return hashArray[num];

}
let arr = [1,2,1,2,3,4,4,3,5,2,1];
let num=6;
console.log(countOccurance(arr, num));

//CHARCTER HASHING FOR LOWERCASE ONLY
// chaHash = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
//str = ['a', 's', 'a', 'd']
/*
function countCharacters(str, char) {
    const maxSize = 26; // Assuming ASCII characters

    let hashArray = new Array(maxSize).fill(0);
    for (let i = 0; i < str.length; i++) {
        console.log(`str.charCodeAt(i): ${str.charCodeAt(i)} :::::: ''a'.charCodeAt(0)': ${'a'.charCodeAt(0)}`);
        const index = str.charCodeAt(i) - 'a'.charCodeAt(0);
        console.log(`index: ${index}`);
        hashArray[index]++;
        console.log(`hashArray: ${hashArray}`);
    }
    return hashArray[char.charCodeAt(char) - 'a'.charCodeAt(0)]
}

let str = "asad";
let char = 'a';
console.log(countCharacters(str, char));
*/
//FOR LOWERCASE AND UPPERCASE BOTH
function countCharacters(str, char) {
    const maxSize = 256; // Assuming ASCII characters

    let hashArray = new Array(maxSize).fill(0);
    for (let i = 0; i < str.length; i++) {
        console.log(`str.charCodeAt(i): ${str.charCodeAt(i)}`);
        const index = str.charCodeAt(i) 
        console.log(`index: ${index}`);
        hashArray[index]++;
        // console.log(`hashArray: ${hashArray}`);
    }
    return hashArray[char.charCodeAt(char)]
}

let str = "syedasad";
let char = 'd';
console.log(countCharacters(str, char));