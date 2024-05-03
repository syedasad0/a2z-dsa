//WAP to check if a string is palindrome or not using recursion

//METHOD 1 Using splice
function palindrome(str) {
    // Base case: if the string has 0 or 1 characters, it's a palindrome
    if (str.length <= 1) {
        return true;
    }
    if (str[0] !== str[str.length - 1]) {
        return false
    } else {
        return palindrome(str.slice(1,-1))
    }
}
let str = "racecar";
console.log(palindrome(str))


//METHOD 2

function palindrome2(str2, leftPointer){
    // console.log(`leftPonter: ${leftPointer}, str2.length: ${Math.floor(str2.length/2)}`)
    if(leftPointer >= Math.floor(str2.length/2)){
        return true;
    }
    if(str2[leftPointer] !== str2[str2.length - leftPointer -1]){
        return false
    }
    else{
        return palindrome2(str2, leftPointer + 1)
    }

}
let str2= 'madam';
let leftPointer = 0
console.log(palindrome2(str2, leftPointer));