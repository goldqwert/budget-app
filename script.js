

let money;
let time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }

}
start();

let appData = {
    budget: money, // переменные выше
    timeData: time, // переменные выше
    expenses: {}, // 1 метод 
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
    }, major: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Это минимальный уровень достатка!");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Это средний уровень достатка!");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Это высокий уровень достатка!");
        } else {
            console.log("Произошла ошибка");
        }
    }, depositQuestions: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?", ""),
                percent = +prompt("Под какой процент?", "");
    
            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход с Вашего депозита в месяц: " + appData.monthIncome);
        }
    }, nextQuestions2: function() {

        for (let i = 1; i <= 3; i++) {
            let questionOptExpenses = prompt("На что вы можете необязательно потратить деньги?", "");
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        }
    
    
    }, addMoney: function () {
        let items = prompt("Что принесет дополнительный доход?(!через запятую!)", "");
        if (typeof(items) != "string" || items == "" || typeof(items) == null) {
            console.log("Вы ввели некорректные данные!");
        } else {
        appData.income = items.split(", ");
        appData.income.push(prompt("Может что-то еще?", ""));
        appData.income.sort();

        appData.income.forEach(function (items, i, mass) {
            alert("Способы доп.заработка: "(i+1) + items);
        }
        };
    }

};