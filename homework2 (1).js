//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function displayFavoriteFoods(person) {
    for (let key in person) {
        console.log(`${key}:`);
        if (Array.isArray(person[key])) {
            person[key].forEach(item => {
                if (typeof item === 'object') {
                    for (let subKey in item) {
                        console.log(`  - ${subKey}: ${item[subKey]}`);
                    }
                } else {
                    console.log(`  - ${item}`);
                }
            });
        } else {
            console.log(`  - ${person[key]}`);
        }
    }
}

displayFavoriteFoods(person3);


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

function checkStringLength(str) {
    return new Promise((resolve, reject) => {
        if (str.length > 10) {
            resolve("Big word");
        } else {
            resolve("Small Number");
        }
    });
}

checkStringLength("My Beaver is the best")
    .then(message => console.log(message))  
    .catch(error => console.log(error));

checkStringLength("Dbeaver")
    .then(message => console.log(message))  
    .catch(error => console.log(error));




// codewars #1
// https://www.codewars.com/kata/57356c55867b9b7a60000bd7

function basicOp(operation, value1, value2) {
    switch(operation) {
        case '+': 
            console.log(value1 + value2);
            break;
        case '-': 
            console.log(value1 - value2);
            break;
        case '*': 
            console.log(value1 * value2);
            break;
        case '/': 
            if(value2 === 0) {
                console.log("Cannot divide by zero");
            } else {
                console.log(value1 / value2);
            }
            break;
        default: 
            console.log('Invalid operation');
            break;
    }
}
basicOp('+', 4, 7); 
basicOp('-', 15, 18); 
basicOp('*', 5, 5); 
basicOp('/', 49, 7); 

// codewars #2
// https://www.codewars.com/kata/523b4ff7adca849afe000035/train/java

function elBeaver() {
    return "Embrace DBeaver";
}
console.log(elBeaver()); 

