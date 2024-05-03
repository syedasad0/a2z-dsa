function reverseNumber(num){
    let reversedNumber = 0;
    while(num > 0){
        const digit = num % 10;
        reversedNumber = reversedNumber * 10 + digit;
        num = Math.floor(num / 10);
    }
    return reversedNumber;

}

console.log(reverseNumber(123));