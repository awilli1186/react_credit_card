# Assignment 12.1 for the Iron Yard

- Create a credit card input component that uses React.js to render the view based on the type of     the credit card using the 1st few credit card numbers.

## Give it a try.

- http://awilli1186.github.io/react_credit_card/

To begin, simply enter a valid card number (don't worry, it's not sent outside your browser). If that isn't for you (and I don't blame you), you can also try these valid credit card numbers to get the feel of it:

- Visa: 4111111111111111
- Discover: 6011111111111117
- MasterCard: 5111111111111118
- Maestro: 5018111111111112
- JCB: 3511111111111119
- Union Pay: 6211111111111111
- American Express: 371111111111114
- Diners Club: 38111111111119

## Install packages

- `npm install`
  - This will install the node dependencies for you, and will also install any bower components.
  - This will also run the gulp build process to create the dist folder.


## Listening for file changes:

If you have any scss or js files that you want to automatically transpile, then run the command:
`gulp watch`


## Build and watch

If you would like to build the `dist/` folder and then watch for file changes, then run the command:
`gulp`

This will run:
- watch
- lint
- babel
- sass

## Lint (JSCS) our Javascript

If you want to validate your Javascript code and it's style against the AirBnb style guide, then run the command:
`gulp lint`

## Compile SASS

If you want to compile your SASS (.scss files), then run the command:
`gulp sass`

## Transpile ES6 code to ES5

If you want to compile your ES6/ES7 (ES2015/17) Javascript code to ES5 to use new Javascript features now before the browser supports them, then run this command:
`gulp babel`

## Deploy your project to GitHub Pages

If you want to deploy your project (dist folder) to GitHub pages, then run this command:
`gulp deploy`
