// //let and const

// let x = 6;

// x = 7;

// console.log(x);

// // типи даних в JS їх 5 вони примітивні
// // string(рядок, строка), number, boolen (true, fools), null, undifined//

// let str = "HHHHHH 8"

// console.log(str.toLocaleLowerCase());

// console.log(str.length); // - функція яка рахує кількість символів у рядку, пробіл - це теж символ

// let num = 10;

// console.log(num % 3); // - результат буде 1, тому що в 10 влазить 3 трійки, а залишається 1.
// //ТОбто повертає залишкове значення

// // boolen
// // true - від 1-одиниці
// //fals - 0

// //false | null | undefined | "" - це пустий рядок | 0 | NaN - falsy values хибні значення

// // Оператори порівняння
// // > < >= <= == === != !==

// console.log(5 === 5);

// console.log(5 === "5"); // falsy- порівнює і дані , тобто 5 пьятірки, і тип - тобто зліва число а справа- рядок

// console.log(5 == "5"); // не порівнює  типи тому буду - true

// console.log(1 != 7); //true - порівнюється як - одиниця не рівна сімці

// console.log(1 != '1'); // falsy - тому, що порівнюється і тип
// // тобто != це так само як ==

// console.log(1 !== '1'); //true -

// console.log("2" > "12"); // true - бо  в js  так порівнюються рядки, по перших цифрах, тобто 2>1

// console.log("2" < "12"); // falsy - бо 2 не менше 1, тобто першоъ цифри в числы 12

// console.log("4" == 4);

// console.log("false" === false);

// console.log(1 == true); // true - тому , що в JS 1 - це true

// console.log(1 === true); // false - типи різні

// console.log("0" == false); // true - тому , що в JS 0 - це false, а (==) - не порівнює типи

// console.log("0" === false);

// console.log('Papaya' < 'papaya'); //true - тому, що в JS маленька буква завжди більша за Велику

// console.log('Papaya' === 'papaya') //false  - бо хоч і тип однаковий, але велика і мала букви строга рівність тому так

// console.log(undefined == null); // true - не порівнює типи

// console.log(undefined === null);

// // ЛОгічні оператори їх є 3

// // && - (тобто (і)
// // || - або
// // ! - не

// console.log(true && 3); // буде 3, бо оператор працює до першого false, або йде до кінця і дає останнє значення

// console.log(false && 3); // буде false - бо побачив перший false

// console.log(true && 3 && 'kiwi'); //kiwi - та сама логіка що і 75 рядок

// console.log(true && 0 && 'kiwi'); // 0 - бо він в js це - false, а порівнюється до першого false

// console.log(true || 3); // true - працюэ до першого true

// console.log(true || 3 || 4); // те саме

// console.log(true || false || 4); // те саме, до першого тру

// console.log(null || 2 || undefined); // 2 - бо це перший тру

// console.log((1 && null && 2) > 0);  //false - бо в перших дужках зупинився на першому false(null), а далі 0>0, тому такий результат

// console.log(null || (2 && 3) || 4);//3

// console.log(null || (2 && 3)); //3

// let t = 8 + 10;

// t = 900;

// console.log(t);

// Math - масиви - різні логарифмічні функції, наприклад макс і мін число та ін.

// Прикольний скріпт для рантомного числа у певному діапазоні

// function getRandom(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min)
// }
// console.log(getRandom(10, 42))

// // String - рядки, строка
// const name = 'Марічка'
// const age = 29

// const output = `Привіт, мене звати ${name} и мені ${age} років.`
// console.log(output)


// const firstName = "Yevhen"
// console.log(firstName)

// let name = "Shako"
// console.log(name.)

// Функції
// Function Declaration
// function greet(name) {
//     console.log('Привіт - ', name)
// }
// greet('Женя')

// // Function Exprission - коли функцію ми робимо з перемінної

// const greet2 = function greet2(name) {
//     console.log('Привіт 2 - ', name)
// }

// greet2('Марічка')


// function calculateTotalPrice(orderedQuantity, pricePerItem) {
//     // Change code below this line
//     const totalPrice = orderedQuantity * pricePerItem;

//     // Change code above this line
//     return totalPrice;
// };

// orderedQuantity(5, 8, 3, 1, 12);
// pricePerItem(100, 60, 400, 3500, 70);
// calculateTotalPrice();


// Цикли  розглядаєм основний і найпоширеніший  - for

// Задача  - написати цикл фор, який виводить в консоль браузера числа від мін до макс, але тільки якщо число 5

const max = 100;
const min = 20;
// Рішення номер 1
for (let i = min; i <= max; i++) {
    if (i % 5 === 0) {
        // console.log(i);
    }
}

// Рішення номер 2 - не дуже рішення

for (let i = min; i <= max; i += 5) {
    // console.log(i)

}

// Рішення номер 3

for (let i = min; i <= max; i++) {
    if (i % 5 !== 0) continue;
    // console.log(i);

}

// рішення 4, робим зворотній відрахунок

for (let i = max; i >= min; i--) {
    if (i % 5 === 0) {
        console.log(i);
    }
}