/*Напишите функцию, которая принимает два числа.
Каждую секунду необходимо выводить в консоль,
начиная от первого и заканчивая вторым. Используйте setInterval.

Вы можете ввести 2 любых числа, если хотите, что бы
числа менялись в обратном порядке - первое число должно быть больше второго
*/
let z = prompt("введите 1 число")
let y = prompt("введите 2 число")
function count(a, b) {
  if (a<b){
  let x = a;
  let intervalId = setInterval(function() {
    console.log(x);
    if (x==b) {
      clearInterval(intervalId);}
    x++;}, 1000)
  }
  
  else if (b<a) {
      let x = a;
  let intervalId = setInterval(function() {
    console.log(x);
    if (x==b) {
      clearInterval(intervalId);}
    x--;}, 1000)
  }
  }
  

count (+z, +y);