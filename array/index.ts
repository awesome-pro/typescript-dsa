// this code is detailed explanation of all the methods and properties of arrays in typescript

let arr = [1, 2, 3, 4, 5]
console.log(arr)

//push
arr.push(6)
//console.log(arr)

//pop
// const popped = arr.pop()
// console.log(popped)

//shift
const shifted = arr.shift()
console.log(shifted, arr)

// unshift
arr.unshift(0)
console.log("Unshifted: ", arr)

// reverse
arr.reverse()
console.log("Reversed: ", arr)

// sort
arr.sort()
console.log("Sorted: ", arr)


// compare function
const compare = (a: number, b: number) => b - a
arr.sort(compare)
console.log("Sorted with compare function: ", arr)


// concat 
let arr2 = [6, 7, 8, 9, 10]
let arr3 = arr.concat(arr2)
console.log("Concatenated: ", arr3)

// slice
let sliced = arr3.slice(2, 6)
console.log("Sliced: ", sliced)

// splice
let spliced = arr3.splice(2, 3)
console.log("Spliced: ", spliced)

// indexOf
let index = arr3.indexOf(2)
console.log("Index of 6: ", index)