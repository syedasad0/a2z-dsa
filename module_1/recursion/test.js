//This program will print 1 unlimited times until stack gets overflowed. RangeError: Maximum call stack size exceeded
/*
function f(){
    console.log(1);
    f();
}

f();
*/

//Applying base condition to this program
let count = 0;
function f(){
if(count == 5){
    return;
}
console.log(count++);
f();
}

f();