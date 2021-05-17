////Курс Node.js - Урок 2 ДЗ - задача 2.2 - игра "Загадай число"
const readline = require('readline')
const input = readline.createInterface(process.stdin);


let myFigure = 5;
console.log(`Начинаем игру - введите число в диапазоне от `);

input.on('line', (data) => predictNumber(data));

function predictNumber(data) {
  userFigure = Number(data);
  
  if (isNaN(userFigure)) {
    console.log("Введите цифру, или нажите 'Ctrl + C' для выхода из игры");

  } else {
    console.log("Число!");
  }

}
