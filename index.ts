#! /usr/bin/env node
import inquirer from "inquirer"

const currencies: any = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
}

let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "enter currency you want to convert from",
        type: "list",
        choices: Object.keys(currencies)
    },
    {
        name: "to",
        message: "enter currency you want to convert into",
        type: "list",
        choices: Object.keys(currencies)
    },
    {
        name: "amount",
        message: "enter your amount",
        type: "number"
    }
])
console.log(user_answer)

let fromAmount = currencies[user_answer.from]
let toAmount = currencies[user_answer.to]
let amount = user_answer.amount
let baseCurrency = amount / fromAmount;
let convertedAmount = baseCurrency * toAmount
console.log(convertedAmount)

