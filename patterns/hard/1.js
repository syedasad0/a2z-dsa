/*

         A       
      A  B  A
   A  B  C  B  A
A  B  C  D  C  B  A

*/

function printPattern(num){
    for(let i=0; i<num; i++){
        for(let j=0; j<num-i-1; j++){
            process.stdout.write("  ");
        }
        let ch = 'A';
        let breakpoint = Math.floor((2 * i + 1) / 2);
        //console.log('breakpoint==>', breakpoint);
        for (let j = 1; j <= 2 * i + 1; j++) {
            process.stdout.write(ch + " ")
            if (j <= breakpoint) ch = String.fromCharCode(ch.charCodeAt(0) + 1);
            else ch = String.fromCharCode(ch.charCodeAt(0) - 1);
        }
        
        for(let j=0; j<num-i-1; j++){
            process.stdout.write("  ");
        }
        console.log();
    }

}

printPattern(4);