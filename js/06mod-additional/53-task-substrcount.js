/*Создать функцию substrCount(needle,haystack,offset,length) которая находит количество 
вхождений строки needle в строку haystack, со смещением offset на длине length 

let num = substrCount("ре","Ехал Грека через реку",5,15); // 3
*/
const substrCount = (needle, haystack, offset, length) => {
  haystack = haystack.slice(offset, offset + length);
  return haystack.split(needle).length - 1;
}

let num = substrCount("ре", "Ехал Грека через реку", 5, 15); // 3
console.log(num);//3
