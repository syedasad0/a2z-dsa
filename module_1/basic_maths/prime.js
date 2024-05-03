function checkPrime(num){
    let divisorCount = 0;
    for(let i=1; i<=num; i++){
        if(num % i == 0){
            divisorCount++;
        }
    }
    if(divisorCount == 2){
        return "Prime Number"
    }else{
        return "Not a Prime NUmber"
    }
}

console.log(checkPrime(11));

function checkPrime2(num){
    let divisorCount = 0;
    for(let i=1; i*i <= num; i++){
        if(num % i == 0){
            divisorCount++;
            if((num/i) != i){
                divisorCount++;
            }
        }
   
    }
    if(divisorCount ==2) return "Prime Number"
    else return "Not a Prime Number"

}; //complexity: O (Sqr root of n)


console.log(checkPrime2(10));