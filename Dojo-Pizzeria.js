


function pizzaOven(){
    var pizza = {}
    pizza.crustType = crustType;
    pizza.sacuceType = crustType;
    pizza.CheeseType = crustType;
    pizza.ToppinsType = crustType;
    return Pizza;
}





function PizzaOven(crustType, sauceType, cheesesType, toppingType) {
    var crustType =["Deep dish","St. Louis Style","Neapolitan","New York Style","Detroit/Sicilian Style",]
    crustType = crustType[Math.floor(crustType.length * Math.random())];
    var sauceType =["traditional","Pesto","White Garlic Sauce","Garlic Ranch Sauce","Marinara Sauce",]
    sauceType = sauceType[Math.floor(sauceType.length * Math.random())];
    var cheesesType =["mozzarella", "cheedder", "sharp cheedder", ]
    cheesesType = cheesesType[Math.floor(cheesesType.length * Math.random())];
    var toppingType = [["pepperoni", "sausage"], ["mushrooms","onions"], ["ham","pineapple" ]]
    toppingType = toppingType[Math.floor(toppingType.length * Math.random())];
    
    var Pizza = {};
    Pizza.crestType = crustType;
    Pizza.sauceType = sauceType;
    Pizza.cheesesType = cheesesType;
    Pizza.toppingsType = toppingType;
    return Pizza;
}   


console.log(PizzaOven());










const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 50;
const expected2 = { quarter: 2 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };

/**
 * Calculates the fewest coins of the standard American denominations needed
 *    to reach the given cents amount.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} cents
 * @param {string} sick
 * @returns {Object<string, number>} - A denomination table where the keys are
 *    denomination names and the value is the amount of that denomination
 *    needed.
 */
function fewestCoinChange(cents) {
    let coins = {};
    let quarters = 0;
    let dimes = 0;
    let nickels = 0;
    let pennies = 0;

    while(cents > 0){
        
        if (cents >= 25){
            quarters = Math.floor(cents / 25);
            cents %= 25;
        }
        else if(cents >= 10){
            dimes =  Math.floor(cents / 10);
            cents %= 10;
        }
        else if(cents >= 5){
            nickels =  Math.floor(cents / 5);
            cents %= 5;
        }
        else{
            pennies = cents;
            cents = cents - pennies
        }
    }
    coins ["quarters"] = quarters;
    coins ["dimes"] = dimes;
    coins ["nickels"] = nickels;
    coins ["pennies"] = pennies;
    return coins;
}


console.log(fewestCoinChange(25))




