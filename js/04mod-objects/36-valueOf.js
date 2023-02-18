let cat1 = { name: "кот" };

console.log(cat1 - 10); //NaN

cat1.valueOf = function () {
  return 100;
};

console.log(cat1 - 10); // 90
