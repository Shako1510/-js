// Парс числа Number.parseInt() и Number.parseFloat()

let elementWidth = '50px';
// const result = Number.parseInt(elementWidth);
// console.log(result); // виводить ціле число 50 - відкидає лишнє

let elementHeigth = '200.74px';
// elementHeigth = Number.parseFloat(elementHeigth); // виводить число 200,74
// console.log('elementHeigth: ', elementHeigth);

let salery = 1300.16462;
// salery = salery.toFixed(2); // залишає після коми, кількість знаків, яка тобі потрібна
// salery = Number(salery); // -приводить значення до числа

// //інший спрощений запис
// salery = Number(salery.toFixed(2));

// console.log(salery);

//     Об'єкти

// const base = 2;
// const pawer = 6;

// console.log(Math.pow(2, 3)); // обєкт для простих логарифмічних задач, маспов приводить число в степінь

// більш сучасний запис

// const result = Math.pow(base, pawer);
// console.log(base ** pawer);

//      Задача 1

// Написати скрипт, який просить користувача ввести число та степінь
// виводить число в цю степінь і виводить результата в консоль

//1 крок
// let base = prompt('Введіть число');
// base = Number(base);
// console.log(base);

// Крок 2

// let power = prompt('Введи ступінь');
// power = Number(power);
// console.log(power);

// Крок 3

// const result = base ** power;
// console.log(result);

//    Генерація звичайних чисел в певному діапазоні (формулаа)

// const max = 50;
// const min = 10 // Math.round - округляє згенеровані числа до цілих.
// const result = Math.round(Math.random() * (max - min) + min);

// console.log(result);

