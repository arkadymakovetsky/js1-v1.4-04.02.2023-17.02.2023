/*
 стрелочная функция - новый вариант функции выражения использующий =>

 Переводы слов с англ.:
 arrow function - стрелочная функция
*/


const sum = (a, b) => a + b;
log(sum(10, 20)); //sum(10)(20)

log(operation(sum, 2, 10));
log(operation( (a,b) => a - b, 2, 10));

const fn = a => b => a ** b;
log( fn(2)(5) );
/*
function fn(a){
    return function (b){
        return a ** b
    }
}
*/

const log = p => console.log(p);