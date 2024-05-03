//WAP to print linearly from 1 to N using recursion

function printOneToN(i, n) {
    if (i > n) return;
    else {
        console.log(i);
        printOneToN(i + 1, n)
    }
}

printOneToN(1, 5)