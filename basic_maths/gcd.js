function gcd(num1, num2){
    let gretestDivisor = 1;
    for(let i=1; i<= Math.min(num1, num2); i++){
        if(num1 % i == 0 && num2 % i == 0){
            gretestDivisor = i;
        }
    }
    return gretestDivisor; 

}

console.log(gcd(12,15)); // O(min(num1, num2))

function gcd2(num1, num2){
    for(let i=Math.min(num1, num2); i<= 1; i--){
        if(num1 % i == 0 && num2 % i == 0){
            return i;
            break;
        }
    }
}

console.log(gcd(1,13)); // O(min(num1, num2))

//eucledian Algo

function gcd3(num1, num2){
    while(num1 > 0 && num2 > 0){
        if(num1 > num2){
            num1 = num1 % num2;
        }else{
            num2 = num2 % num1;
        }
    }
    if(num1 == 0) return num2;
    return num1;
}

console.log(gcd3(10,15)); //complexity O(log phi(min(num1, num2)))



