# Carma Payment Gateway App

### Dependencies

[Node >= v16.15.0]

### Git Branch

[dev]

# Issues

If you face babel-node is not recognized as an internal or external command. Then run these commands in your terminal in main directory.

### npm i @babel/node

### npm i @babel/cli

### npm i @babel/core

# Database Configuration

[postgres]

### Create Database

Create postgres database named "carma".

### Run Migrations

> npx sequelize-cli db:migrate

### Package Installation

./ npm install
./client npm install

# Running the Application

### Development Mode

1. Run the carma-payment-gateway-app node server on port 5000
2. Run the carma-payment-gateway-app web server on port 3000
3. npm start
4. Open http://localhost:3000/ in your browser

# Development Server Reactjs

[Vite]

Typically, we might create a new project using Create React App, but it can take a lot of time to install over 140 MB of dependencies. Vite is a lightweight tool that takes up 31 MB of dependencies, which will save time in starting a new project. Vite also uses the browser-native ES (ECMAScript) modules for linking to JavaScript files, which doesn’t rebuild the entire bundle after each file change. These differences result in a faster experience when creating, updating, and building a React App with Vite.

# Credit Card No and Cvv Encryption

[Bcrypt.js] [Hashing] [Salting]

Bycrypt.js library is used to encrypt credit card and cvv and used hashing algorithm and 12 digit salting. This makes data more secure in the database.

# Luhn Algorithm

Luhn Algorithm is used to verify any credit card number. Joi library is used for backend validation and it has inbuilt method based on Luhn Algorithm to verify credit card number.

# Questions

### 1. What is the result of this code in the console?

for (var i = 0; i < 100; i++) {
setTimeout(function() {
console.log(i);
}, 200);
}

### Answer

The result of this code will be 100 times "100" printed in console. "For Loop" will remain in Call stack untill "i" becomes greater than 100. All the 100 SetTimeout callbacks will be waited in Callback Queue untill call stack gets empty. Once call stack gets empty event loop push all the 100 callbacks one by one from Callback Queue to call stack and at that time the value of "i" will be "100". So "100" will be printed for all those callbacks

### 2. What is the result of this code in the console?

(async function() {
function waitForMe() {
return new Promise(function(resolve, reject) {
setTimeout(function() {
resolve("hello");
}, 200);
});
}
const result = await waitForMe();
console.log(result);
})();

### Answer

The output of this code in console is "hello". Promise and setTimeout callbacks will be pushed into their respective callbacks queues. setTimeout callback will trigger first and "resolve" statement will be executed. When promise gets resolved then event loop come to promise callback queue to execute all the callbacks in that queue. The reson behind setTimeout callback queue gets executed first is that because promise is yet to resolve so it would wait to be resolved then will be executed.

### 3. Explain the difference?

Explain the difference between those:
var a;
let b;
const c;

### Answer

The scope of a var variable is functional. It can be updated and re-declared into the scope. It can be accessed without initialization. The scope of let variable is block. It can be updated but can not be re-declared into the scope. It can not be accessed without initialization, as it returns an error. The scope of a const variable is block. It can not be updated and re-declared into the scope. It can not be accessed without initialization, as it can not be declared without initialization.

### 4. What is the result of this code in the console?

We got a module "test.js":

var arr = [];
module.exports = arr;

We got a module using it:

var test = require("./test");
test.push("hello");
console.log(JSON.stringify(test));

We got another module using it later:

var test = require("./test");
test.push("another");
console.log(JSON.stringify(test));

### Answer

The result in the console will be ["hello","another"]. I used only one file "test.js" for whole code execution.
