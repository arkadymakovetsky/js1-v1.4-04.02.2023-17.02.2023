// Задание 1
/* Напишите оператор if, такой, чтобы в качестве
выражения в скобках у него были значения true, false.
Например, if( true ) или if( false ). Посмотрите как
работает этот оператор, поместив какую-нибудь команду
после круглых скобок (Например, console.log(1)). 
Примечание: это задание очень простое. 
Если вы читая его, поняли суть, не выполняйте его 🙂
*/

// Задание 2
/* 
Создайте переменные m и n. В m поместите произвольное
числовое значение. Напишите оператор ветвления if так,
чтобы если m было больше 50, то в переменную n помещалось
слово «большое», иначе — слово «маленькое».
*/
console.log('-----------Задание 2 --------------');
let m = Math.random() * 99 + 1; // 1 - 100
let n = 'маленькое';

if (m > 50) {
    n = 'большое';
}
console.log(m.toFixed(4), n);


// Задание 3
/* Определите сколько раз выполнится цикл while? 
Примечание: это можно сделать прочитав скрипт
или запустив его консоли браузера.*/
// let i = 2;
// while( i < 9 ){
//  console.log( i++ );
// }
console.log('-----------Задание 3 --------------');
console.log(`Цикл while выполнится 7 раз:`);
let i = 2;
while ( i < 9 ) {
    console.log( i++ );
}


// Задание 4
/* 
Напишите скрипт, который используя оператор while
выведет все числа от 45 до 67.
*/
console.log('-----------Задание 4 --------------');
{
    let i = 45;
    while ( i <= 67 ) {
        console.log( i++ );
    }
}


// Задание 5
/*
Напишите скрипт, который используя оператор while
выведет все числа от 45 до 670, кратные 10 (100).
*/
console.log('-----------Задание 5 --------------');
{
    let i = 45;
    while ( i <= 670 ) {
        if (i % 100 == 0) {
            console.log( i );
        }
        i++;
    }
}


// Задание 6
/*
Переменная n хранит целое число от 0 до 9. 
Используя оператор switch, написать скрипт, 
который в зависимости от числа будет выводить
слово (Например, если n равно 3, то будет
выводиться слово «три»)
*/
console.log('-----------Задание 6 --------------');
{
    let n = 5;
    let res = '';
    
    switch( n ) {
        case 0: res = 'ноль'; break;
        case 1: res = 'один'; break;
        case 2: res = 'два'; break;
        case 3: res = 'три'; break;
        case 4: res = 'четыре'; break;
        case 5: res = 'пять'; break;
        case 6: res = 'шесть'; break;
        case 7: res = 'семь'; break;
        case 8: res = 'восемь'; break;
        case 9: res = 'девять'; break;
    }
    console.log( res );
}


// Задание 7 (*)
/*
В переменных size и unit хранятся размер и единицы
измерения информации 120 и «Кб» соответственно.
Зная что могут быть заданные Кб, Мб, Гб (кило-, мега- и гигабайты) 
и 1килобайт равен 1024 байта, найти количество байт в size.
*/
console.log('-----------Задание 7 (*) -----------');
{
    const KB = 1024;
    let size = 120;
    let unit = 'Кб';
    let res = NaN;

    switch (unit) {
        case 'Кб': res = size * KB**1; break;
        case 'Мб': res = size * KB**2; break;
        case 'Гб': res = size * KB**3; break;
        case 'Тб': res = size * KB**4; break;
    }
    console.log(`Количество байт в ${size}${unit}: ${res}`);
}


// Задание 8 (*)
/*
Постройте при помощи циклов JavaScript скрипт для 
календаря на HTML. Примечание: выполнить задание для
одного месяца, используя HTML-элемент table
*/
console.log('-----------Задание 8 (*) -----------');
{
    const ROWS = 5, COLS = 7;
    const WD = ['пн','вт','ср','чт','пт','сб','вс'];

    let days = 28; // Февраль 2023 года (количество дней)
    let offset = 3; // первое число начинается со среды
    let k = -offset + 1;

    let table = '<table>\n';

    table += '\t<tr>\n';
    for(let j = 0; j < COLS; j++) {
        table += '\t\t<td>' + WD[j] + '\n';
    }

    for(let i = 0; i < ROWS; i++){
        table += '\t<tr>\n';
        for(let j = 0; j < COLS; j++){
            k++;
            if (k > 0 && k <= days) {
                table += '\t\t<td>' + k + '\n';
            } else {
                table += '\t\t<td>' + '\n';
            }
        }  
    }
    table += '</table>';
    // document.body.innerHTML = table;
    console.log(table);
}
