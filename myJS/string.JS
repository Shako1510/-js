// Рядки

const massage = 'В цьому рядку 26 символів';

// console.log(massage.length); // визначає кількість символів в рядку, пробіл теж символ

// Конкетинація рядків

const firstName = 'Biba';
const lastName = 'boba';

// console.log('qwe ' + 'asd' + ' zxd'); // з бпробілам зшиває
// console.log(firstName + lastName); // зшиває значення змінних
const fullName = firstName + ' ' + lastName; // ще один варіант

// console.log(fullName);


//      Нормалізація

// let brend = prompt('Enter brand');
// const fff = 'samsUng';

// const normalizedBrand = brend.toUpperCase(); // скидає дядок до нижнього або ерхнього регістру, тобто всі букви маленькі або великі
// const norvalizedFFF = fff.toLowerCase();

// console.log(normalizedBrand);
// console.log(norvalizedFFF);


//       Пошук слова у рядку за допомогою методу includes

const blackWord1 = 'спам';
const blackWord2 = 'розпродаж';

const string1 = 'Привіт це Женя, це не спам';
const string2 = 'Найбільший РОЗПРОДАЖ товарів в Україні';


// console.log(string1.includes(blackWord1));
// console.log(string1.includes(blackWord2));

// console.log(string2.includes(blackWord1));
// console.log(string2.includes(blackWord2)); // не бацить слово розпродаж, бо воно велики, тому приводимо до нижнього регістру

const nnormalizedString2 = string2.toLowerCase(); // скидаємо весь рядок до нижнього регістру
// console.log(nnormalizedString2.includes(blackWord2)); // далі перевіряємо за дом inckludes чи є слово (розпродаж, яке в перемінній 2)-  у другому рядку

/// є ще метод slice - він відрізає за доп індексів, частину сорва, яку треба перівяти, від 0 д0 кількості букв, напр до спам - це 0123 індекси

// let brand = 'SamSUng';
// console.log(brand[4]); // дає букву u
// console.log(brand.slice(1).toLowerCase());// amsung

// brand = brand[0] + brand.slice(1).toLowerCase(); // квадратні дужки як бронь на букву, щоб з нею нічого не робити
// console.log(brand) ;




