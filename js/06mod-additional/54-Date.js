/*
Date - функция-конструктор для работы с объектами даты
*/

// console.log(Date);
// console.log(Date.prototype);
// console.log(new Date);

let dt;
dt = new Date('1 jun 2025');
dt = new Date('1 2025 jun ');
dt = new Date(18238738683457);
dt = new Date(2024, 0, 14, 10, 20, 30);
dt = new Date(2024, 0, 100, 0, 1000);
dt = new Date();
console.log(dt);
console.log(dt.toISOString());

console.log(
  dateFns.format(dt, "'Todday is a' eeee MMMM")
)

dt.setMonth(7);

console.log(dt.getTime());
console.log(dt.getDay());
console.log(dt.getMonth());
console.log(dt.getFullYear());
console.log(dt.getHours());
console.log(dt);

console.log(dt.toLocaleTimeString());
console.log(dt.toLocaleDateString());
console.log(Date.UTC(2024,0,1,3,10));
console.log(new Date(1704078600000));

console.log(dt.getTimezoneOffset());

const minutes = -180;
dt.setMinutes(dt.getMinutes() + minutes);
console.log(dt);

console.log(new Date(2024,0).getTime());
console.log(new Date(2024,1).getTime());


console.log(
  new Date(2024,0) - new Date(2024,1)
);

/* Создать функцию fn(dt), которая, принимает объект - дату-время и возвращает строку вида 

"5 дней назад"
"21 день назад"
*/
const fn = dt => {
  const diff = 5;

  const word = (n, w1, w2, w3) => {
    let word = w1;
    if(n % 100 < 5 || n % 100 > 20){
      if(n % 10 == 1) word = w2;
      if(n % 10 > 1 && n % 10 < 5)
        word = w3;
    }
    return n + ' ' + word;
  }

  return `${word(diff, 'дней', 'день', 'дня')} назад`
}
console.clear();
console.log( fn(new Date(2022, 2, 1)) ); //31 
console.log( fn(new Date(2022, 0, 1)) ); //90

