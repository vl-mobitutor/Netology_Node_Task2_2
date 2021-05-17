////Курс Node.js - Урок 2 ДЗ - задача 2.2 - игра "Загадай число"
const readline = require('readline')
const input = readline.createInterface(process.stdin);


let myFigure = 5;
console.log('Игра "Угадай число":');
console.log(`Введите число в диапазоне от ${myFigure - 5} до ${myFigure + 5}`);

input.on('line', (data) => predictNumber(data));

function predictNumber(data) {
  userFigure = Number(data);
  
  if (isNaN(userFigure)) {
    console.log("Введите цифру, или нажите 'Ctrl + C' для выхода из игры");

  } else {
    if (userFigure > myFigure) console.log("Меньше");
    if (userFigure < myFigure) console.log("Больше");
    if (userFigure == myFigure) {
      console.log("Поздравляем! Отгадано число: " + myFigure);
      process.exit(0);
    }
  }

}
