function checkPalindrome(num){
    let reversedNumber = 0;
    let temp = num;
    while (num > 0){
        const digit = num % 10;
        reversedNumber = reversedNumber * 10 + digit;
        num = Math.floor(num / 10);
    }
    if(reversedNumber == temp){
        return "Palindrome"
    }else{
        return "Not a Palindrome!"
    }

}

console.log(checkPalindrome(121));