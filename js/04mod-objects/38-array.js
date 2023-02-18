/*

массивы - объектный тип JS для хранения наборов данных

Переводы слов с англ.:
array - массив
length - длина

*/

let arr = [
  9,
  "q",
  true,
  { name: "john" },
  [45, 56],
  function () {
    return 2;
  },
];

console.log(arr + "");
console.log(arr.length);

console.log(arr[0]); //9
console.log(arr[3].name); //john
console.log(arr[3]["name"]); //john
console.log(arr[4][1]); //56
console.log(arr[5]()); //2

// Создайте числовой массив из чисел 1, 2, 3, 4 и 5
// Создайте массив строк "Ехал", "Грека", "через", "реку"
// Создайте числовой массив из чисел от 0 до 99
