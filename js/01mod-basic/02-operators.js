/*
операторы присвоения - задают значения переменным или константам
арифметические операторы - дают в результате вычисления число
строковые - вычисляются в строку
логические операторы - дают в результате boolean или другие типы
операторы сравнения - определяют соотношения значений

Переводы слов с англ.:
type of - тип
math - математика
power - степень
round - круглый
ceil - потолок
floor - пол
Not a Numberm, NaN - не число
true - истинный
false - ложный
less - меньше
more - больше
equality operator - оператор равенства
assignment operator - оператор присвоения
array - массив
*/

const name = "John";
let salary = 100000;
var isProgrammer = true;
let color = null;
console.log(name, salary, isProgrammer, color);

console.log(typeof name);
console.log(typeof salary);
console.log(typeof isProgrammer);
console.log(typeof color);

//математические
console.log(10 + 3); // 13
console.log(10 - 3); // 7
console.log(10 / 3); // 3.33
console.log(10 * 3); // 30
console.log(10 % 3); // 1

console.log(12 % 7); // 5
console.log(3 % 10); // 3
console.log(234234 % 2); //0
console.log(2342342342347 % 2); //1

console.log(10 ** 3); // 1000
console.log(Math.pow(10, 3)); //1000
console.log((2 + 2) * 2);
console.log(Math.round(36.6)); // 37
console.log(Math.ceil(36.6)); // 37
console.log(Math.floor(36.6)); // 36

//работа со строками
console.log("привет" + " " + "мир!");
console.log("5" + 3);
console.log(+"5" + 3);
console.log("5" - 3);
console.log("5кг" - 3); //NaN
console.log(typeof NaN);

//логические
let flag = false;

console.log(!true);
console.log(!false);
console.log(!!flag);

console.log(!!0);
console.log(!!"");
console.log(!!undefined);
console.log(!!null);
console.log(!!NaN);

console.log(!!10);
console.log(!!-10);
console.log(!!"мир");
console.log(!!{});
console.log(!!true);
console.log(!![]);
console.log(!!100n);

console.log(false || false); // false
console.log(false || true); // true
console.log(true || false); // true
console.log(true || true); // true

console.log(false && false); // false
console.log(false && true); // false
console.log(true && false); // false
console.log(true && true); // true

console.log(10 || "Привет!"); //10
console.log("кошелек" || "жизнь"); //'кошелек'
console.log(0 || "Привет!"); //'Привет!'
console.log(0 || ""); //''
let expression1 = 0 || "" || false || 100n || true;
console.log(expression1);

console.log(5 == 5);
console.log(5 == "5");
console.log(5 === "5");
console.log(5 > 0);
console.log(5 < 0);
console.log(5 >= 0);
console.log(5 <= 0);
console.log(5 != 0);

let i = 10;

i = i + 1; //11
i += 1; //12
i++; //13
++i; //14

var j = 0;
console.log(j); //0
console.log(j);

var j = 0;
console.log(++j); //1
console.log(j);


// Практическое задание
console.clear();

// Определить какой  тип данных у величины "Мир"
console.log("typeof 'Мир' -->", typeof "Мир"); //string

// Определить находится ли зарплата 120000 в диапазоне 150000 и 200000
console.log("Зарплата 120000 в [150000-200000] -->", 120_000 >= 150_000 && 120_000 <= 200_000); //false

// Есть переменные flag = true и amount = 100, определить является ли true условие, когда flag - истина И amount равен 150
let vflag = true;
let amount = 100;
console.log("" + true + "==" + vflag + " && " + amount + "==150 -->", vflag && amount == 150) //false

// Дана функция y = x * x. Найти значение y при x = 23
let x = 23;
let y = x * x;
console.log(x + " * " + x + " =", y); //529
console.log(`y = ${x * x}`);

// Дана функция y = x * x * x * x. Найти значение y при x = 23
y = Math.pow(x, 4);
console.log(x + " ** " + 4 + " =", y); //279841
console.log(`y = ${y}`);
