// function to generate all well-formed parenthesis combinations, given n pairs of parentheses

function generateParenthesis(n: number): string[] {
    let result: string[] = [];
    generateParenthesisRec(n, n, "", result);
    return result;
}

function generateParenthesisRec(open: number, close: number, prefix: string, result: string[]): void {
    if(open == 0 && close == 0){
        result.push(prefix);
    }else{
        if(open > 0){
            generateParenthesisRec(open-1, close, prefix + "(", result);
        }
        if(close > open){
            generateParenthesisRec(open, close-1, prefix + ")", result);
        }
    }
}

// test case

console.log(generateParenthesis(2)); // ["((()))","(()())","(())()","()(())","()()()"]