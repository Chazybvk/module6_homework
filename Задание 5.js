//Напишите функцию, которая принимает два натуральных числа x и n
//и возвращает x в степени n. Иначе говоря, умножает x на себя n раз и 
//возвращает результат.

const square = (x, n) => {
  let result = x;
  for (let i=1; i<n; i++) {
    result *= x;
  }
  console.log(result);
}

square (5, 3)