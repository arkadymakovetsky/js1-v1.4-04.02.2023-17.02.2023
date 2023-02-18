let sum = function (n, m) {
  return n + m;
};
console.log(sum(2, 3)); //5
console.log(sum);

let sum2 = sum;
console.log(sum2(2, 3)); //5
console.log(typeof sum); //'function'

function operation(fn, a, b) {
  if (typeof fn != "function") return false;
  return fn(a, b);
}
console.log(operation(sum, 2, 3));
console.log(
  operation(
    function (n, m) {
      return Math.pow(n, m);
    },
    2,
    3
  )
);

//анонимную функцию
console.log(
  (function (n, m) {
    return Math.pow(n, m);
  })(3, 5)
);
