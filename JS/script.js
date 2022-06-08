"use strict"; // строгий режим
let num = 123;
let a, b;
a = 1;
b = a;

//alert(num + a + b);

num = 10;
//alert(num);

let x = 13, y = 5;
//alert(x % y);

let c = 2;
//alert(y ** c); // возведение в степень
//alert(2 * 2 ** 2); // степень имеет приоритет

let str = "Aleh";
//alert(str + " " + str.length);
//alert("abcdef".length); // длина строки

console.log('123');

//alert(String(true) + Number(true));

let test = Boolean(1/0);
//alert(test);

let s = "abcde";
//s[0] = "e"; // ошибка - строки неизменяемы. можно прочитать, но нельзя изменить

let n = 3;
//alert(s[0] + s[2] + s[4]);
//alert(s[n]);

let s1 = "absdef";
//alert(s1[s1.length - 2]); // выводит последний символ строки

let n1 = String(12345);
//alert(n1[4]+n1[3]+n1[2]+n1[1]+n1[0]);

let num1 = 3;
num1++; //4
let num2 = num1--; //4 -> 3
//alert(num1++); //3
//alert(--num2); //3

let s2 = 0.1 + 0.2;
//alert(+s2.toFixed(3)); //toFixed возвращает строку, + преобразует в число

//alert((0.3 - 0.1).toFixed(2));

/* let n2 = Number(prompt("сторона прямоугольника"));
let n3 = Number(prompt("сторона прямоугольника"));
let n4 = (n2 + n3) * 2;
alert("периметр прямоугольника " + n4); */

document.write(1 + "<br>" + 2);

let n4 = '123';
let sum = Number(n4[0]) + Number(n4[1]) + Number(n4[2]);
console.log(sum);



/*
многострочный комментарий
*/