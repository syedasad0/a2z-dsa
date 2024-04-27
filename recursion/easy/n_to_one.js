//WAP to print numbers from n to 1 using recursion

function printNtoOne(n, i){
    if(n<i) return;
    else{
        console.log(n);
        printNtoOne(n-1, i)
    }

}

printNtoOne(10, 1);
