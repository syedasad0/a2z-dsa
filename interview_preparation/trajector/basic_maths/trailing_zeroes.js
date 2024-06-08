//WAP to find the trailing zeroes of a factorial

function countTrailingZerosInFactorial(n) {
    let count = 0;
    for (let i = 5; n / i >= 1; i *= 5) {
        count += Math.floor(n / i);
    }
    return count;
}

// Example usage:
const num = 125;
const trailingZeros = countTrailingZerosInFactorial(num);
console.log("Trailing zeros in factorial:", trailingZeros);
