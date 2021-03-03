// variables for Exercise 1 and 2
var cars = ['Tesla', 'Audi', 'Renault', 'Volvo', 'Madza', 'Fiat', 'Ferrari'];
var fruits = ['Apple', 'Banana', 'Kiwi'];
var animals = ['Monkey', 'Horse', 'Dog'];


// variables for Exercise 3
var fruits2 = ("mango/cherries/kiwi/grapes/pear/peach/orange/lemon");
var fruit_output = new Array();



cars.sort();

fruits.push('Orange');
console.log(fruits);

fruits.pop();
console.log(fruits);


console.log(animals);

animals.unshift('Cat');
console.log(animals);

animals.shift();
console.log(animals);



fruit_output = fruits2.split('/');
// document.write(fruit_ouput[0]);

document.write(fruit_output.join(" <br> <br> "));


