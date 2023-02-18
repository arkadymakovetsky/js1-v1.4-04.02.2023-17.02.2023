const arr = [1, 2, 5, 7, 34];

console.log(
  arr.map((item, index) => {
    console.log(item, index);
    return item * 2;
  })
);

arr.forEach((item, index) => {
  console.log(item, index);
});

console.log(arr.filter((item) => item % 2));
console.log(arr.filter((item) => !(item % 2)));

console.log(arr.every((item) => typeof item == "number"));
console.log(arr.every((item) => typeof item == "string"));

console.log(arr.some((item) => item % 2));
console.log(arr.some((item) => item % 2));


console.log([1,2,3].reverse());
console.log(['q','w','e','r','t','y'].slice());
console.log(['q','w','e','r','t','y'].slice(2));
console.log(['q','w','e','r','t','y'].slice(2,4));
console.log(['q','w','e','r','t','y'].slice(2,-2));
console.log(['q','w','e','r','t','y'].slice(-4,-5));

/*
console.log( arr.map( function(item){
    return item * 2
}) );
*/
