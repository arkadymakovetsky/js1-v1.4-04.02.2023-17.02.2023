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


//------------- Практика ---------------
// Цикл for(let item in obj) {...}
let obj = {
  name: 'Name',
  color: 'Red',
}
for(let key in obj) {
  console.log(`Key=${key}, Value=${obj[key]}`);
}

// Создайте числовой массив из чисел 1, 2, 3, 4 и 5
let arr1 = [1, 2, 3, 4, 5]

// Создайте массив строк "Ехал", "Грека", "через", "реку"
let arr2 = ["Ехал", "Грека", "через", "реку"]
for(let i in arr2) {
  console.log(i, arr2[i]);
}

// Создайте числовой массив из чисел от 0 до 99
let arr3 = [];
for (let i = 0; i < 100; i++) {
  arr3[i] = i;
}
console.log(arr3);


// Цикл obj.forEach( fn )
const arr4 = [1, 2, 5, 7, 34];

arr4.forEach((item, index) => {
  console.log(item, index);
});
