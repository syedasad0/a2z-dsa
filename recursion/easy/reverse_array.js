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