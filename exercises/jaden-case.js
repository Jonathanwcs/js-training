'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */


function jadenCase(string){
    return string.toUpperCase();
}



//* Begin of tests
const assert = require('assert')
assert.strictEqual(jadenCase('je suis la'), 'JE SUIS LA')
assert.strictEqual(jadenCase('hello world'), 'HELLO WORLD')
// End of tests */
