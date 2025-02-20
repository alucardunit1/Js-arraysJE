// array-exercises.js

// Exercise 1: Create an array of three colors and print the first color.
let colors = ["Red", "Green", "Blue"];
console.log(colors[0]);

// Exercise 2: Add a color to the end of the array and print the array.
colors.push("Brown")
console.log(colors);
// Exercise 3: Remove the last color from the array and print the array.
colors.pop()
console.log(colors);

// Exercise 4: Add a color to the beginning of the array and print the array.
colors.unshift("brown")

// Exercise 5: Remove the first color from the array and print the array.
colors.shift();
console.log(colors);

// Exercise 6: Print the number of colors in the array.
console.log(colors.length);

// Exercise 7: Convert the array into a string separated by dashes.
colors.join("-");
console.log(colors.join("-"));

// Exercise 8: Replace the second color with "pink" and print the array.
colors[1] = "pink";
console.log(colors);

// Exercise 9: Create an array of numbers and print the third number.
let numbers = [1,2,3,4,5]
console.log(numbers[2])
// Exercise 10: Remove the last element, add two numbers to the beginning, and print the array.
numbers.pop()
numbers.unshift(6, 7)
console.log(numbers);
// Exercise 11: Sort the numbers in ascending order and print the array.
numbers.sort(function (a, b) { return a - b; });
console.log(numbers);
console.log(colors);