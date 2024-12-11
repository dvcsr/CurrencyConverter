// Welcome to the Currency Converter!
// We have imported the 'sync-input' package for you.
// You will use this in later stages.
// This package allows you to get user input.
// Like so:
// let name = input("Type your name: ");
// let age = Number(input("Type your age: "));
const input = require('sync-input');
//init var
const USD = 1.0;
const JPY = 113.5;
const EUR = 0.89;
const RUB = 74.36;
const GBP = 0.75;
let sourceCurrency
let targetCurrency;
let amountInput;
let answer;
let formula;
let menuAnswer;

//methods & abstraction
const greet = () => {
    console.log("Welcome to Currency Converter!")
}
const exchangeDisplayed = () => {
    console.log(
        `1 USD equals ${USD} USD
1 USD equals ${JPY} JPY
1 USD equals ${EUR} EUR
1 USD equals ${RUB} RUB
1 USD equals ${GBP} GBP`
    )
}

// method below is against DRY principle, but I read somewhere too many abstraction also make code readability harder hmm;
const calculateCurrency = (sourceCurrency, targetCurrency, amountInput) => {
    let scU = sourceCurrency.toUpperCase();
    let tcU = targetCurrency.toUpperCase();
    switch (sourceCurrency.toUpperCase()) {
        case "JPY":
            switch (targetCurrency.toUpperCase()) {
                case "USD": formula = USD/JPY; break;
                case "JPY": formula = JPY/JPY; break;
                case "EUR": formula = EUR/JPY; break;
                case "RUB": formula = RUB/JPY; break;
                case "GBP": formula = GBP/JPY; break;
            }
            answer = amountInput * formula;
            answer = answer.toFixed(4);
            console.log(`Result: ${amountInput} ${scU} equals ${answer} ${tcU}`);
            break;
        case "EUR":
            switch (targetCurrency.toUpperCase()) {
                case "USD": formula = USD/EUR; break;
                case "JPY": formula = JPY/EUR; break;
                case "EUR": formula = EUR/EUR; break;
                case "RUB": formula = RUB/EUR; break;
                case "GBP": formula = GBP/EUR; break;
            }
            answer = amountInput * formula;
            answer = answer.toFixed(4);
            console.log(`Result: ${amountInput} ${scU} equals ${answer} ${tcU}`)
            break;
        case "RUB":
            switch (targetCurrency.toUpperCase()) {
                case "USD": formula = USD/RUB; break;
                case "JPY": formula = JPY/RUB; break;
                case "EUR": formula = EUR/RUB; break;
                case "RUB": formula = RUB/RUB; break;
                case "GBP": formula = GBP/RUB; break;
            }
            answer = amountInput * formula;
            answer = answer.toFixed(4);
            console.log(`Result: ${amountInput} ${scU} equals ${answer} ${tcU}`)
            break;
        case "GBP":
            switch (targetCurrency.toUpperCase()) {
                case "USD": formula = USD/GBP; break;
                case "JPY": formula = JPY/GBP; break;
                case "EUR": formula = EUR/GBP; break;
                case "RUB": formula = RUB/GBP; break;
                case "GBP": formula = GBP/GBP; break;
            }
            answer = amountInput * formula;
            answer = answer.toFixed(4);
            console.log(`Result: ${amountInput} ${scU} equals ${answer} ${tcU}`)
            break;
        case "USD":
            switch (targetCurrency.toUpperCase()) {
                case "USD": formula = USD/USD; break;
                case "JPY": formula = JPY/USD; break;
                case "EUR": formula = EUR/USD; break;
                case "RUB": formula = RUB/USD; break;
                case "GBP": formula = GBP/USD; break;
            }
            answer = amountInput * formula;
            answer = answer.toFixed(4);
            console.log(`Result: ${amountInput} ${scU} equals ${answer} ${tcU}`)
            break;
    }

}

const validateCurrency = (currency) => {
    let currencyRegex = /^(USD|EUR|GBP|RUB|JPY)$/i;
    return currencyRegex.test(currency);
}

function isNumber(value) {
    let regex = /[0-9]/;
    return (typeof value === 'number' && !isNaN(value)) || regex.test(value);
}

 const askUser = () => {
    console.log(`What do you want to convert?`);
    sourceCurrency = input(`From: `);
     if (!validateCurrency(sourceCurrency)) {
         console.log(`Unknown currency`);
         askUser();
     }
     else
    targetCurrency = input("To: ");
    if (!validateCurrency(targetCurrency)) {
        console.log(`Unknown currency`);
        askUser();
    }
    else
    amountInput = input("Amount: ");
    if (amountInput < 1) {
        console.log(`The amount cannot be less than 1`);
    }
    else if (!isNumber(amountInput)) {
        console.log("The amount has to be a number");
    }
    else
    calculateCurrency(sourceCurrency, targetCurrency, amountInput);
}

const loopProgram = () => {
    console.log("What do you want to do?")
    console.log("1-Convert currencies 2-Exit program")
    menuAnswer = input();
    if (menuAnswer == 1) {
        askUser();
        loopProgram();
    }
    else if (menuAnswer != 1 && menuAnswer != 2 ) {
        console.log(`Unknown input`);
        loopProgram();
    }
    else if (menuAnswer == 2);
}


//implementation
greet()
exchangeDisplayed()
loopProgram()
console.log(`Have a nice day!`)

