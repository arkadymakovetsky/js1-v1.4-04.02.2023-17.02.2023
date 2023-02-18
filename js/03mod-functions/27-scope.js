
let i = 10, j = 'й';//глобальный

function foo(i = 4){
  i++;
  let j = '1';
  function some(){
    console.log(i, j);//5
  }
  some();
}

foo();
console.log(i);//10
console.log(j);//й









