//WAP to print a name N times using recursion

function printName(i, n) {
    if (i > n) {
        return;
    } else {
        console.log("Syed Asad")
        printName(i+1, n);
    }
}

printName(1, 5) //Time Complexity: O(n //Space Comlexity: O(N) because of N functions residing in stack)