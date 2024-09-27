function pow(x: number, n: number): number{
    if(n == 0){
        return 1;
    }else if(n < 0){
        return pow(x, n+1) / x;
    }else{
        return x * pow(x, n-1);
    }
}

// test case
console.log(pow(5, -2))