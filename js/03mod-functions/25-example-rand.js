/*Написать функцию rand(), которая возвращает случайное целое число (Math.random() )*/

// let rand = function(){
//   return Math.round(Math.random() * 100);
// }
// console.log( rand() );

let rand = function(n,m){
  return Math.round(Math.random() * (m-n)+n);
}
console.log( rand(123,180) );





