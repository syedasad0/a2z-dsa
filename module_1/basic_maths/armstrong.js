function armstrong(num){
    let armstrongNumber = 0;
    let temp = num;
    while (num != 0){
        const digit = num % 10;
        console.log('digit==?', digit);
        armstrongNumber = armstrongNumber + (digit * digit * digit); 
        num = Math.floor(num /10);
    }
    console.log('armstrong===>', armstrongNumber);

    if(armstrongNumber == temp){
        return true
    }
    else{
        return false
    }

}

console.log(armstrong(371))