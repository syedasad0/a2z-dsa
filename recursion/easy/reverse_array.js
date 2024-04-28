//WAP to reverse an array using recursion
// a = [4,5,2,7,9] output: [9, 7, 2, 5, 4]

//Parameterise Way
function reverse(arr, i, reversedArr){ //arr, 5, []    //arr, 4, [9] //arr, 3, [9,7]  // arr, 2, [9,7,5] // arr, 1, [9,7,5,2]  // arr, 0, [9,7,5,2,4]
    if(i==0){                           // 5==0 false    //4==0 false   // 3==0           // 2==0 false       // 1==0 false          //0==0
        console.log(reversedArr);
        return;
    }
    else{
        reversedArr.push(arr[i-1]);     //[9]         [9,7]          [9,7,5]          [9,7,5,2]          [9,7,5,2,4]
        reverse(arr, i-1, reversedArr); //arr, 4, 9 // arr, 3, [9,7]  //arr, 2, [9,7,5]  // arr, 1, [9,7,5,2]  // arr, 0, [9,7,5,2,4]
    }

}
let arr = [4,2,5,7,9]
let reversedArr = [];
reverse(arr, arr.length, reversedArr);


//RECURSION USING SWAP ALGORITHM AND TWO POINTERS
function reverse2(arr2, l, r){
    if(l>=r){
        return arr2;
    }
    else{
        let temp =0;
        temp = arr2[l];
        arr2[l] = arr2[r];
        arr2[r] = temp;
        return reverse2(arr2, l+1, r-1)
    }

}
let arr2 = [1,2,3,4,5];
let l = 0
let r= arr2.length-1;
console.log(reverse2(arr2, l, r));

//RECURSION USING SWAP ALGORITHM WITH ONLY SINGLE VARIABLE
function reverse3(arr3, leftPointer){
    if(leftPointer >= arr3.length/2){
        return arr3;
    }
    else{
        let temp =0;
        temp = arr3[leftPointer];
        arr3[leftPointer] = arr3[arr3.length - leftPointer -1];
        arr3[arr3.length - leftPointer - 1] = temp;
        return reverse3(arr3, leftPointer+1)
    }

}
let arr3 = [1,2,3,4,5];
let leftPointer = 0
console.log(reverse3(arr3, leftPointer));