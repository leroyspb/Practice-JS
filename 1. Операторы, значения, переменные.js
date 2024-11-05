// Задание 1
// Напишите программу, которая спрашивает у пользователя его имя и фамилию
// с помощью prompt и отвечает: Привет, {имя} {фамилия}! с помощью alert.


// name = prompt("Как твое имя?")
// secondName = prompt("Как твоя фамилия?")
// alert("Привет, " + name + " " + secondname + "!")



// Задание 2
// Напишите программу, которая переводит температуру по Цельсию в температуру по Фаренгейту.
// Она должна спросить у пользователя количество градусов по Цельсию с помощью
// prompt и ответить: {X} градусов по Цельсию равны {Y} градусам по Фаренгейту.

// temp = prompt("Какая сейчас температура по Цельсию?")
// farenTemp = temp * 1.8 + 32
// alert(temp + " градусов по Цельсию равны " + farenTemp + " градусовпо Фарингейту ")



// Задание 3
// Перепишите данную математическую формулу, используя JavaScript.
// Программа должна запрашивать с помощью prompt значение X и выдавать соответсвующее значение Y
// в качестве ответа. Обратите внимание на приоритет операций (важно правильно расставить скобки).

// x = prompt("Введите значение X")
// let y = (4*(x ** 2) + 18 - (23*x)) / ((5/9) * x + (18 * (((x**3) / 33)) * x)) + (x * (15 / 12))
// alert("Ответ: " + y)




// Задание 4
// Оператор typeof в JavaScript возвращает строку с типом данных переданного в него значения.
// Эта строка начинается с маленькой буквы. Например: typeof 123 вернёт строку 'number', а typeof undefined вернёт строку 'undefined'.
// Все возможные значения typeof: 'undefined', 'object', 'boolean', 'number', 'bigint', 'string', 'symbol', 'function'.
// ВНИМАНИЕ! Из-за особенностей JavaScript typeof null вернёт 'object'. Запомните это и учтите при выполнении задания.
// Найдите в коде строки 'SOME' и напишите вместо них нужное название типа — так, чтобы при запуске кода alert написал 'true'.

// Исходный код:
//
// let a = 12;
// let b = 'number';
// let c = false;
// let d = null;
// let e = undefined;
// let f = 123.34;
// let g = '1' + 1;
// let h = 15 / 0;
// let i = -'5';
// let j = 5 == '5'
//
// let at = typeof a === 'number'; // true
// let bt = typeof b === 'string'; // false, а нужно чтобы все были true
// let ct = typeof c === 'boolean';
// let dt = typeof d === 'object';
// let et = typeof e === 'undefined';
// let ft = typeof f === 'number';
// let gt = typeof g === 'string';
// let ht = typeof h === 'number';
// let it = typeof i === 'number';
// let jt = typeof j === 'boolean';
// console.log(typeof d)
// console.log(at && bt && ct && dt && et && ft && gt && ht && it && jt)
// alert(at && bt && ct && dt && et && ft && gt && ht && it && jt);


// Задание 5
// Поменяйте код так, чтобы каждая переменная была объявлена до того, как ей присвоено значение.
// Пользуйтесь правилом: везде, где возможно, в первую очередь используйте const, если нельзя const, то let.
// И никогда не используйте var.

// const NDS = 0.20
// const NDFL = 0.13
// const EXCISE = 0.1
// let RENT = 40000
// let FOOD = 15000
// let OTHER = 15000
// let MY_SALARY = 120000
//
// ndflTax = MY_SALARY * NDFL;
// mySalaryNet = MY_SALARY - ndflTax;
// otherTaxes = mySalaryNet * (NDS + EXCISE);
// totalAvailable = mySalaryNet - otherTaxes;
// totalAvailable -= FOOD + OTHER + RENT
// // alert('Зарплата ' + MY_SALARY + ' рублей')
// // alert('Уплачено налогов на сумму ' + (ndflTax + otherTaxes) + ' рублей')
// // alert('Осталось ' + totalAvailable + ' рублей')
// console.log('Зарплата ' + MY_SALARY + ' рублей')
// console.log('Уплачено налогов на сумму ' + (ndflTax + otherTaxes) + ' рублей')
// console.log('Осталось ' + totalAvailable + ' рублей')