/*Написать функцию, которая принимает число как аргумент и возвращает 
функцию, которая также принимает число как аргумент и возвращает 
сумму этих двух чисел. Выведите в консоль результат.*/

function callback(secFunc) {
      secFunc(24);
  return function(){
    console.log ();
}
}
function secFunc(a)
  {
 var x = (a+a);
 console.log(x);
  }
  const resultFunc= callback(secFunc);
  resultFunc();
  