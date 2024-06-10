/* Задание 6.6.1 */
/*const string = "Довод";
let stringPolindrom = "";
stringPolindrom = string;
let i = 0;
let j = stringPolindrom.length - 1;
while (i != j) {
  if (stringPolindrom[i].toUpperCase() != stringPolindrom[j].toUpperCase()) {
    console.log("Слово не является Полиндромом");
    break;
  }
  i += 1;
  j -= 1;
  if (i === j || i < j) {
    console.log("Это слово является Полиндромом");
  }
}
*/
/*Задание 6.6.2*/
/*const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ]; 
const newArr = new Set(arr);
console.log(newArr);*/

/*Задание 6.6.3*/
/*const number = +prompt("Введите число");
const arr = [];
for (let i = 0; i <= number; i += 1) {
  arr.push(i);
}
console.log(arr);*/

/*Задание 6.6.4*/

/*const game = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];
const gameArray = [];
let index = 0;
for (let i = 0; i < 3; i += 1) {
  gameArray[i] = [];
  for (let j = 0; j < 3; j += 1) {
    gameArray[i][j] = game[index];
    index += 1;
  }
}
let str = "";
for (let i = 0; i < gameArray.length; i += 1) {
  for (let j = 0; j < gameArray[i].length; j += 1) {
    str += `${gameArray[i][j]} `;
  }
  str += "\n";
}
console.log(str);*/

/*Задание 6.6.5*/
const obj = {
  some: "some",
  dom: "text",
  arr: [1, 2, 3, 4, 5],
  tom: "there",
};
const arrValues = [];
for (const key in obj) {
  if (Array.isArray(obj[key])) {
    for (let i = 0; i < obj[key].length; i += 1) {
      arrValues.push(obj[key][i]);
    }
  } else {
    arrValues.push(obj[key]);
  }
}
console.log(arrValues);
