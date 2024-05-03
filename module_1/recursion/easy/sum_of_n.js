//USING PARAMETERISED WAY

function sumOfN(i, sum) { //i=3, sum =0    i=2, sum=3   i=1, sum=5     i=0, sum=6
    if (i < 1) { // 3 < 1 false      2 < 1 fasle   1 < 1 false   0 < 1 true
        console.log(sum); //6                                           
        return;
    }
    else {
        sumOfN(i - 1, sum + i); //2, 0+3      1, 5          0, 6
    }

}

let n = 3;
sumOfN(n, 0)

//USING FUNCTIONAL WAY

function sumOfN2(num) {
    if (num == 0) {
        return 0;
    } else {
        return num + sumOfN2(num - 1);
    }
}

let num = 5;
console.log(sumOfN2(num));
