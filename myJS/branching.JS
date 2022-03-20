// branching - гілкування
// Оператор - if

// if (// тут запис. вираз - який прирівнюється до буля) {
// тут тіло , вираз якого виконається якщо він однаковий з булем в круглих дужках
// }

// або по іншому., якщо (да або тру) виконуй тіло

// if (15 > 30) { // не виконається
//     console.log('x > y');
// }

// if (35 > 30) { //  виконається
//     console.log('x > y');
// }


//    Оператор if else

// if (5 > 30) {
//     console.log('x > y');
// } else {
//     console.log('x < y');
// }


//   Задача 1
// Залежно від рівня зарплати вивести повідомлення

// const salary = 800;

// if (salary < 500) {
//     console.log('Рівень1');
// } else if (salary > 500 && salary < 1500) {
//     console.log('Рівень2');
// } else {
//     console.log('Рівень4') // якщо більше 1500 тоді треба додавати вкінці else як тут
// }


//тернарний оператор - використ тоді коли треба змінити значення в змінній


// const balanse = 1000;
// let massage;

// if (balanse >= 0) {
//     massage = 'Positiv balanse';
// } else {
//     massage = 'Negative balanse'
// }
// console.log(massage);

//   цей вираз можкна замінити.
// const massage = balanse >= 0 ? 'Positiv balanse' : 'negativ balanse';
// console.log(massage);


//Оператор swich - викор-ся коли порівнюєш змінну на рівність сьтрогу ===, а не більше менше ><
// Задача : в залежності від кількості зірок готелю, вивести ціну за номер
// *-20 / **-30 *** -40 **** -50 ***** -60, якщо більше- такої кількості зірок нема

const stars = 1;
let price;

// можна через if else, але багато коду

switch (stars) {
    case 1:
        price = 20;
        break;
    case 2:
        price = 30;
        break;

}

console.log(price);

