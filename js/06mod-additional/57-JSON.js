/*
JSON (JavaScript Object Notation) формат данных

Переводы слов с англ.:
parse - разбор
stringify - "сделай строкой"
*/

let cat = { name: "Барс" };

//структуру в JSON-строку
console.log(JSON.stringify(cat));
console.log(JSON.stringify([34, "привет"]));

//из JSON-строки в структуру
console.log(JSON.parse('{"name":"Барс"}'));
console.log(JSON.parse('[34,"привет"]'));


//---------- Практика ---------------
//Есть объект user. Получите из объекта строку в виде JSON-объекта
const user = {
  "id": 1,
  "name": "John Smith",
  "username": "john",
  "email": "some@some.some",
  "address": {
    "street": "Radio",
    "suite": "Apt. 191",
    "city": "Moscow",
    "zipcode": "101101",
    "geo": {
      "lat": "55.7627822",
      "lng": "37.6827595"
    }
  },
  "phone": "+7 (495) 125-36-90",
  "website": "https://www.specialist.ru/"
}
console.log(JSON.stringify(user));


// Есть JSON-строка jsonStr. Получите из неё JS-объект
// const jsonStr = `{
//   "postId": 1,
//   "id": 1,
//   "name": "id labore ex et quam laborum",
//   "email": "Eliseo@gardner.biz",
//   "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
// }`;

const jsonStr = `{
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\\ntempora quo necessitatibus\\ndolor quam autem quasi\\nreiciendis et nam sapiente accusantium"
}`;
let post = JSON.parse(jsonStr); // есть проблемы с переводом строки \n в "body"
console.log(post);
console.log(JSON.stringify(post));
