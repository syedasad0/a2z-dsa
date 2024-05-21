//Given a non-empty array of integers arr, every element appears twice except for one. Find that single one.

function checkAppearanceCount(arr){
    for(let i=0; i<arr.length; i++){
        let num = arr[i];
        let count =0;
        for(let j=0; j<arr.length; j++){
            if(arr[j] == num){
                count++;
            }
        }
        if(count == 1){
            return num
        }
    }

}
let arr = [4,1,2,1,2]
console.log(checkAppearanceCount(arr));