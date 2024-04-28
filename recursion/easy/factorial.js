// function factorial(num){
//     let fact = 1;
//     for(let i=1; i<=num; i++){
//         fact = fact * i;
//     }
//     return fact;

// }

// console.log(factorial(5));

// //1*2*3*4*5 = 120

//PARAMETERISED APPROACH
function factorial(i, fact){ //i=5, 1  i=4, fact =5
    if(i < 1){               //false   //false
        console.log(fact);
        return;
    }
    else{
        factorial(i-1, fact * i); //4, 5  //3, 20
    }

}
let n=5;
factorial(n, 1);

//FUNCTIONAL APPROACH
function factorial2(num){ //3               //2                                     // 1
    if(num == 1){         // 3 == 1 false   //2 == 1 false                          //1 == 1
        return 1
    }
    else {
        return num * factorial2(num-1); //3 * factorial2(2)  // 2* factorial2(1)
    }

}

let num=5;
console.log(factorial2(num));