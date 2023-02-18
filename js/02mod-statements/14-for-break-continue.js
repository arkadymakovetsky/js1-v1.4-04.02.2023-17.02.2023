/*
цикл - инструкция для многократного выполнения блока
for - цикл с трёмя необязательными выражениями в круглых скобках, разделённые точками с запятыми

Переводы слов с англ.:
for - для
break - разрыв
continue - продолжать
*/

for(let i = 0; i < 5; i++){
  console.log(i);
}
let i = 100500;
console.log(i);

for(let i = 0; i < 5 ; i++){

 if(i == 3){
   break;
 }
 
 if(i == 1) {
   continue;
 }
 console.log(i);
}


// ------------------ Практика -----------------------
/*
Дана константа STEPS равная 10. Напишите скрипт,
который будет выводить строки: 
шаг №1
шаг №2
шаг №3
шаг №4
шаг №6
шаг №7
шаг №8
шаг №9
шаг №10
*/
for(let i = 1; i <= 10; i++) {
  if (i == 5) continue;
  console.log(`шаг №${i}`);
}


/*
Создайте строку HTML-тегов <select> и <option> так, чтобы было 10 опций
*/
let select = '<select name="param">\n';

for(let d = 1; d <= 10; d++) {
  select += `\t<option>${d}</option>\n`;
}

select += '</select>';

console.log(select);
// document.write(select);


/*
Дана константа LEVEL=5. Построить пирамиду из символа * с количеством уровней равным LEVEL.
Каждый уровень содержит на два символа больше предыдущего уровня. Например,
*
***
*****
*******
*********
*/
const LEVEL = 7;
const chars = '**'

console.log(`Уровень (LEVEL) равен: ${LEVEL}`);

// Вариант 1
{
  console.log('Вариант 1');

  let result = '';

  for(let k = 0; k < LEVEL; k++) {   
    result += chars[0];
    for(let i = 0; i < k; i++) {
       result += chars;   
     }
     result += '\n';
    }
  console.log(result);
  }

// Вариант 2
{
  console.log('Вариант 2');

  let result = '';
  for(let k = 0; k < LEVEL; k++) {
     result += chars[0] + chars.repeat(k) + '\n';
  }
  console.log(result);
}

/*
    *
   ***
  *****
 *******
*********
*/
{
  let result = '';
  
  // Рассчитываем максимальное кол-во пробелов
  let spaceCount = Math.floor((LEVEL * 2 - 1)/2);
  console.log(`Макс. кол-во пробелов: ${spaceCount}`);

  for(let k = 0; k < LEVEL; k++) {   
    
     let space = '';
     for(let j = 0; j < spaceCount; j++) {
        space += ' ';
     }

     spaceCount--;

     result += space + chars[0]
     
     for(let i = 0; i < k; i++) {
       result += chars;   
     }
     result += '\n';
  }
  console.log(result);
}
