/* Создайте массив из пяти чисел и выведите его элементы */
let arr = [1, 5, 34, 7, 2];

for (let p in arr) {
  console.log(arr[p]);
}

/* Создайте массив из сто пяти случайных чисел и выведите его элементы */
let arr2 = [];
for (let i = 0; i < 105; i++) {
  arr2.push(Math.round(Math.random() * 100));
}
console.log(arr2);

/*Задание Отсортируйте массив из 105 элементов*/
console.log(arr2.sort((a, b) => b - a));

/*Найти 20 элементов последовательности Пизанского*/
console.clear();
const fib = [1, 1],
  n = 20;
for (let i = 2; i < n; i++) {
  fib[i] = fib[i - 1] + fib[i - 2];
}

console.log(fib);
