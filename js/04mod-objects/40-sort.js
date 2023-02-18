/*
sort - метод для сортировки массивов 

Переводы слов с англ.:
sort - сортировать
*/

let arr = ['Катя', 'Ян', 'Анна'];
console.log(arr.sort());

let num = [1, 5, 34, 7, 2];
console.log(num.sort()); // Сортирует как символы

function mySort(a, b) {
  if (a > b) return 1;
  return -1;
}
console.log(num.sort(mySort));
console.log(num.sort(a => a % 2 ? 1 : -1));
//1,5,34,7,2
//1,5,7,2,34 ?
//1,5,2,7,34 ?
//1,2,5,7,34 ?
//1,2,5,7,34 !
//https://www.youtube.com/watch?v=8JsteOQxJZc


//-------- Практика ----------
console.log(num.sort((a, b) => a > b ? 1 : -1));
