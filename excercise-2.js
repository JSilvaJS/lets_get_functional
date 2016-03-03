// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(num1, num2){
    if (num1 > num2) {
    	console.log(num1);
    } else if (num2 > num1) {
    	console.log(num2);
    }}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(num1, num2, num3){
    var max = Math.max(num1, num2, num3);
    return max;
 }


// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------
	
function isVowel(char){
  char = char.toUpperCase()
  var vowel = ['A', 'E', 'I', 'O', 'U'];
  if (char === vowel[0] || char === vowel[1] || char === vowel[2] || char === vowel[3] || char === vowel[4]){
  	return true;
  } else {
  	return false;
  }}

// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    //...
}


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

//Had some help with String.prototype.split() page on MDE, but they showed me a few new tricks that I modified to the function presented.

function reverse(string) {
	var rev = (string.split('').reverse().join(''));
    return rev;
}



// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    //...
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    //...
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    //...
}
