function pow(x: number, n: number): number{
    if(n == 0){
        return 1;
    }

    return x * pow(x, n-1);
}

// test case
console.log(pow(5, 10))