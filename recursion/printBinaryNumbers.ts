// function to print all binary numbers of n digits, using recursion

function printBinaryNumbers(n: number, prefix: string = ""): void {
    if(n == 0){
        console.log(prefix);
    }else{
        printBinaryNumbers(n-1, prefix + "0");
        printBinaryNumbers(n-1, prefix + "1");
    }
}


// function to print all binary numbers of n digits without consecutive 1s, using recursion

function printBinaryNumbersWithoutConsecutiveOnes(n: number, prefix: string = ""): void {
    if(n == 0){
        console.log(prefix);
    }else{
        printBinaryNumbersWithoutConsecutiveOnes(n-1, prefix + "0");
        if(prefix[prefix.length-1] != "1"){
            printBinaryNumbersWithoutConsecutiveOnes(n-1, prefix + "1");
        }
    }
}

// test case

printBinaryNumbersWithoutConsecutiveOnes(5);