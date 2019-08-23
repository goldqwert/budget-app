let startsum = document.getElementById("start");
let budgetValue = document.getElementsByClassName("budget-value")[0];
let daybudgetValue = document.getElementsByClassName("daybudget-value")[0];
let levelValue = document.getElementsByClassName("level-value")[0];
let expensesValue = document.getElementsByClassName("expenses-value")[0];
let optionalExpensesValue = document.getElementsByClassName("optionalexpenses-value")[0];
let incomeValue = document.getElementsByClassName("income-value")[0];
let monthSavingsValue = document.getElementsByClassName("monthsavings-value")[0];
let yearSavingsValue = document.getElementsByClassName("yearsavings-value")[0];
let expensesITEM = document.getElementsByClassName("expenses-item");
let expensesItemBTN = document.getElementsByTagName('button')[0];
let optionalExpensesBTN = document.getElementsByTagName('button')[1];
let countBudgetBTN = document.getElementsByTagName('button')[2];
let optionalExpenses = document.querySelectorAll('.optionalexpenses-item');
let chooseIncome = document.querySelector('.choose-income');
let yearValue = document.querySelector('.year-value');
let monthValue = document.querySelector('.month-value');
let dayValue = document.querySelector('.day-value');

let money;
let time;

startBtn = addEventListener('click', function() {
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц?", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

});

expensesItemBTN.addEventListener('click', function () {
     let sum = 0;
    
     for (let i = 0; i < expensesITEM.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;

        if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != "" && b != "" && a.length < 50 && b.length < 50) {
            appData.expenses[a] = b;
            sum = sum + +b
        } else {
            i--;
        }

    }
    expensesValue.textContent = sum;
});

let appData = {
    budget: money, 
    timeData: time, 
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    nextQuestions: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите на что вы обязательно потратите деньги", ""),
                b = prompt("Во сколько обойдется это Вам?", "");

            if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != "" && b != "" && a.length < 50 && b.length < 50) {
                appData.expenses[a] = b;
            } else {
                i--;
            }

        }

    },
    BudgetDay: function () {
        appData.moneyPerDay = appData.budget / 30;

        alert("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб");
    },
    major: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Это минимальный уровень достатка!");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Это средний уровень достатка!");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Это высокий уровень достатка!");
        } else {
            console.log("Произошла ошибка");
        }
    },
    depositQuestions: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?", ""),
                percent = +prompt("Под какой процент?", "");

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход с Вашего депозита в месяц: " + appData.monthIncome);
        }
    },
    nextQuestions2: function () {

        for (let i = 1; i <= 3; i++) {
            let questionOptExpenses = prompt("На что вы можете необязательно потратить деньги?", "");
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        }


    },
    addMoney: function () {
        let items = prompt("Что принесет дополнительный доход?(!через запятую!)", "");
        if (typeof (items) != "string" || items == "" || typeof (items) == null) {
            console.log("Вы ввели некорректные данные!");
        } else {
            appData.income = items.split(", ");
            appData.income.push(prompt("Может что-то еще?", ""));
            appData.income.sort();

            appData.income.forEach(function (items, i) {
                alert("Способы доп.заработка: " + (i + 1) + " " + items);


            });
        }

    }
};