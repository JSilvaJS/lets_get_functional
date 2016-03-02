// Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.
var sum = function(param1, param2) {
return param1 + param2;
}



// Q2
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbers.
var avg = function(param1, param2, param3) {
	return (param1 + param2 + param3) / 3;
}



// Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length
var getLength = function(param1) {
	return console.log(param1.length);
}



// Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the second
// parameter is greater than the first. Otherwise
// the function should return `false`.

var greaterThan = function(num1, num2) {
	return num1 < num2; 
}


// Q5
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.

var greet = function(name) {
  var msg = 'Hello, ' + name;
  return msg;
};


// Q6
// Write a function called `madlib` that takes
// 4 or more parameters (words). The function 
// should insert the words into a pre-defined
// sentence. Finally the function should return
// that sentence.
// Note: When I say words and sentence I mean
// strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"

var madlib = function(word1, word2, word3, word4) {
	var msg = "My " + word1 + " is a " + word2 + " and it's " + word3 + " has a lot of " + word4 + ".";
	return msg;
}
