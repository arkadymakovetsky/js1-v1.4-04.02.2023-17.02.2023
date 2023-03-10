/*

замыкание - когда первая функция возвращает вторую, а вторая "видит" переменные первой

*/

/* Напишите функцию sumN, которая возвращает другую функцию. Возвращаемая должна складывать произвольное число с начальным N  */

function sumN(n) {
  function s(m) {
    return n + m;
  }
  return s;
}
const foo = sumN(10);
/*console.log(typeof foo);
console.log(foo);*/

console.log(foo(5)); //15
console.log(sumN(10)(5)); //15


// ------------- Практика -------------

// Напишите функцию move(x,y), которая принимает произвольные целочисленные начальные координаты x и y,
// а возвращает фунцкию fn(dx, dy), которая меняет исходные координаты на величины dx и dy
// При вызове fn должны выводиться новые координаты, с учетом смещения на  dx и dy
// Например,
// const fn = move(10, 10);
// fn(2, 3); //12, 13
// fn(-7, -13); //5, 0
// fn(5, 23); //10, 23

const init = (x = 0, y = 0) => {
  return (
    function (dx, dy) {
      x += dx;
      y += dy;
      return (`${x}, ${y}`);
    }
  )
}

//const move = init();
const move = init(10, 10);
console.log(move(0, 0)); //10, 10
console.log(move(2, 3)); //12, 13
console.log(move(-7, -13)); //5, 0
console.log(move(5, 23)); //10, 23
