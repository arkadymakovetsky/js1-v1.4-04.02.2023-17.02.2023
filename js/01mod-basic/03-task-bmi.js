/*Найти индекс массы тела I, при массе человека 100кг, а его рост 1.8м */

let mass = 100, //масса
  height = 1.8, //рост в метрах
  I = 0; //индекс массы тела

// I = mass / (height * height);
// I = mass / Math.pow(height,2);
I = mass / height ** 2;
console.log(I);
