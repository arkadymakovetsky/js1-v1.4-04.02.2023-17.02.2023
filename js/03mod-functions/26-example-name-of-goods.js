﻿
/* Создать функцию goods(n), которая правильно выводит фразу "N товаров" */
const goods = n => {
  let word = 'товаров';
  if(n % 100 < 5 || n % 100 > 20){
    if(n % 10 == 1) word = 'товар';
    if(n % 10 > 1 && n % 10 < 5)
      word = 'товара';
  }
  return n + ' ' + word;
}

for(let i = 0; i < 155; i++){
  console.log( goods( i ) );
}














