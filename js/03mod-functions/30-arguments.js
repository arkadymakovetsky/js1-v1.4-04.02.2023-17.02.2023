/*
иногда бывает нужно создать функцию, с неограниченным кол-вом числом аргументов
*/
function sum() {
  let s = 0;
  let len = arguments.length;

  for (let i = 0; i < len; i++) {
    s += arguments[i];
  }

  return s;
}
//               0  1  2  3
console.log(sum(10, 5, 9, 2)); //26


//------------- Практика ----------------
// Создайте функцию avg(), которая найдет среднее арифметическое по всем своим аргументам
// Например,
// avg(3, 7, 20); //10
// avg(100, 100, 400); //200
function avg(...args) {
  let s = 0;
  let len = args.length;

  for (let i = 0; i < len; i++) {
    s += args[i];
  }
  return s / len;
}
console.log(avg(3, 7, 20)); // 10
console.log(avg(100, 100, 400)); // 200
console.log(avg(10, 5, 9, 2)); // 6.5


// Создайте функцию graph(), которая построит в консоли график из звездочек
// Например,
// graph(4,7,10,5,1)
// ****
// *******
// **********
// *****
// *
function graph(...args) {
  let res = '';
  let len = args.length - 1;

  for (let i = 0; i < len; i++) {
    res += '*'.repeat(args[i]) + '\n';
  }
  res += '*'.repeat(args[len])
  return res;
}
console.log(graph(4, 7, 10, 5, 1));
console.log(`%c${graph(4, 7, 10, 22, 5, 1)}`, 'color:red');
