"use strict";
// Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.
// Input: "I love typescript", "typescript"
// Output: 1
function countWordOccurrences(sentence, word) {
    const count = sentence.toUpperCase().split(word.toUpperCase()).length - 1;
    return count;
}
// console.log(countWordOccurrences("TypeScript I love typescript typeScript", "typescript")) 
