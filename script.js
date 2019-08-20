"use strict"

let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

appData = {
    budget: "",
    timeData: "",
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false;
}

for (i = 0; i < 2; i++) {
let a = prompt("Введите обязательную статью расходов в этом месяце"),
    b = prompt("Во сколько обойдется?");

    expenses[a] = b;
}

alert(money/30);