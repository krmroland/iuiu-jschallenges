[![Build Status](https://travis-ci.org/krmroland/iuiu-jschallenges.svg?branch=master)](https://travis-ci.org/krmroland/iuiu-jschallenges)
[![Coverage Status](https://coveralls.io/repos/github/krmroland/iuiu-jschallenges/badge.svg?branch=master)](https://coveralls.io/github/krmroland/iuiu-jschallenges?branch=master)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/027f2c88ae3f49a7b875a04dadfcb575)](https://www.codacy.com/app/krmroland/iuiu-jschallenges?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=krmroland/iuiu-jschallenges&amp;utm_campaign=Badge_Grade)
[![Maintainability](https://api.codeclimate.com/v1/badges/fea4cee9880b3d6901d5/maintainability)](https://codeclimate.com/github/krmroland/iuiu-jschallenges/maintainability)
[![BCH compliance](https://bettercodehub.com/edge/badge/krmroland/iuiu-jschallenges?branch=master)](https://bettercodehub.com/)

# Java script basic challenges

This repository aims at attempting challenges in  [repo](https://github.com/hadijahkyampeire/IUIU-Js-challenge)  using  [ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_2015_support_in_Mozilla)

### Running tests
 - Ensure you have the following installed on you machine
  - [Git](https://git-scm.com/) A version control system
  - [Node js](https://nodejs.org/en/), An asynchronous event driven JavaScript runtime
  - [Yarn](https://yarnpkg.com/en/) or [npm](https://www.npmjs.com/), A dependancy manager for nodejs applications
 - Clone this repo to your machine by running
 ```bash
  git clone https://github.com/krmroland/iuiu-jschallenges.git
```
 - Install dependencies by running
 ```bash
  yarn # if you have yarn installed
  npm # if you have npm installed
 ```

### Running tests 
Refer to the [Jest docs](https://jestjs.io/) for more reading

```bash
# using yarn
yarn test 
# with coverage
yarn test --coverage

# using npm
npm run test
# with coverage
npm run test --coverage
```
### Credits
- [Kyampeire  Hadijah](https://github.com/hadijahkyampeire) for initiating the challenge

### Related solutions
- https://github.com/hadijahkyampeire/IUIU-Js-challenge



## Questions  mirrored from [here](https://github.com/hadijahkyampeire/IUIU-Js-challenge)

1. Write a program to display the current day and time in the following format. Sample Output : Today is : Tuesday. 
    Current time is : 10 PM : 30 : 38.

2. Write a program to reverse a word. 
    Hint.
    for example Washington should be notgnihsaW, Hello  should be olleH

3. Write a program to print fibonacci Numbers to 100.
    Hint
    Fibonacci Numbers refers to a  series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.

4. Write a simple function which can add infinite numbers ,n. For Example 2+3+5 = 10, 3+2+1+4 =11, 2+1=3. And so on. There should be no limit to input n, numbers to add.


5. Write a program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.

6. Write a JavaScript exercise to get the extension of a filename. Eg if the file is index.html, it should return ‘html’

7. Write a program to find the single element in a list where every element appears three times except for one.
    Input : [5, 3, 4, 3, 5, 5, 3]
    Output : 4

8. Write a program to find a value which is nearest to 100 from two different given integer values.

9. Write a program to search for repeated words in a sentence, after searching the word , the program should neglect. the     duplicates of the words from the statement.
    Hint.
    Input : The boy boy is going to school school.
    Output: The boy is going to school.

10. Write a program to create new string with first 3 characters are in lower case. If the string length is less than 3 convert all the characters in upper case.
