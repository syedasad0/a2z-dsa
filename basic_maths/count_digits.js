function countDigits(num) {
    let count = 0;
    while (num > 0) {
        count++;
        console.log(count)
        // Remove the last digit from the number
        num = Math.floor(num / 10);
    }
    return count;
}

console.log(countDigits2(12987));

//Alternate Method

function countDigits2(number){
    let numberString = number.toString();
    return numberString.length;

}

console.log(countDigits2(12987));

//Alternate Method

function countDigits3(number){
    let reversedNumber = Math.floor(Math.log10(number) + 1);
    return reversedNumber;

}

console.log(countDigits3(1234567654));