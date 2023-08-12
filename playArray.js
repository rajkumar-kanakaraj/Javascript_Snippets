let fruits = ["apple", "mango", "grape", "cherry", "banana", "pineapple"];
console.log(fruits.length);

fruits.forEach(eachFruit =>{
    console.log(eachFruit);
})

fruits.push("guava");
console.log(fruits.length);
console.log(fruits);

console.log(fruits.pop());
console.log(fruits.unshift("test"));
console.log(fruits);
fruits.shift();
console.log(fruits);

const numbers = [1,2,3,4,5,6,7]
console.log(fruits.concat(numbers));
console.log(numbers.concat(fruits));

console.log(fruits.join(" *** "));

// Find if mango is present in the  fruits array or not

let found = fruits.find(Fruits => Fruits === 'mango')
console.log(found);

console.log(fruits.includes('cherry'));
console.log(fruits.indexOf('cherry'));

// Sorting an array 
fruits.sort();
console.log(fruits);

// Reversing an array 
fruits.reverse();
console.log(fruits);

//map

//const numbers = [1,2,3,4,5,6,7]

let NewNumbers = numbers.map((Num, index) => {
    console.log(Num, index);
    return Num+2;
})
console.log(NewNumbers);

//Filter

let filterNum = numbers.filter((Val, index) => {
    return Val < 4;
})
console.log(filterNum);