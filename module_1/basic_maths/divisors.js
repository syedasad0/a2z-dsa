function findDivisors(num){
    for(let i=1; i<=num; i++){
        if(num % i == 0){
            process.stdout.write(i + "  ")
        }
    }
}

findDivisors(36);

//1,2,3,4,6

function findDivisors2(num){
    const divisors = [];
    for(let i=1; i * i <= num; i++){
        if(num % i == 0){
            divisors.push(i);
            if((num / i) !== i){
                divisors.push(num / i);
            }
        }
      
    }
return divisors.sort((a,b) => a-b)
}

console.log(findDivisors2(36)); //Complexity: O(Square Root of n)