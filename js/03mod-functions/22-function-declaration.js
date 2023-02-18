/*
 функции - используются для повторного использования кода
 название формируется по правилам формирования переменных
 return возвращает из функции значения
 после выполнения return дальнейший код функции не выполняется

 Переводы слов с англ.:
 return - вернуть
 call - вызов
 arguments - аргументы
 expression - выражение
 callback functions - функции обратного вызова
 recursion - рекурсия
 closures - замыкания
 arrow function - стрелочная функция
 anonymous function - анонимная функция
 scope - область видимости
*/

function hello(name = "гость", age = 25) {
  console.log(`Привет, ${name} ${age}`);
}

hello("Василий", 45);
hello("John");
hello();

// Напишите функцию sum(), которая будет складывать два числа.
// Например, вызов sum(2,6) должен вернуть 8

function sum(a = 0, b = 0) {
  return a + b;
}
console.log(sum(2, 10)); // 12
console.log(sum(2, 6)); // 8
