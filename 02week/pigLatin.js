'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {

    /* 
    Lower case and trim your word using string methods (this will pass some of the tests that are written at the bottom of the file)
    */
   let trimWord = word.trim().toLowerCase();
   let wordArr = trimWord.split("");
    console.log(wordArr);

    /* 
    IF the first letter is a vowel (you will want to use array and string methods to check), we simply need to return the word with 'yay' on the end 
    */

  let vowelArr = ['a','e','i','o','u']

  if (vowelArr.includes(wordArr[0])) {
    wordArr.push('y','a','y');
    console.log(wordArr);
    let wordLatin = wordArr.join("");
    return wordLatin;
  }
    /* 
    ELSE since the first letter is NOT a vowel, we need to LOOP through our word to find the first vowel. Once we find it we need to stop the loop and slice the string at that index so that all consonants before the vowel are moved to the end of the word and then 'ay' is added to the end of that.
    */
   else {
     for (let i=0; i<wordArr.length; i++) {
        if (vowelArr.includes(wordArr[i])) {
          let newArr = wordArr.splice(0,i);
          console.log(newArr);
          let newWordArr = wordArr.concat(newArr);
          console.log(newWordArr);
          newWordArr.push('a','y');
          console.log(newWordArr);
          let wordLatin = newWordArr.join("");
          return wordLatin;
        }
     }
   }

}


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
