// let day = 40;
// if(day >= 1 && day <= 10){
//     alert("Первая декада");
// } else if(day >= 11 && day <= 20){
//     alert("Вторая декада");
// } else if(day >= 21 && day <= 31){
//     alert("Первая декада");
// } else {
//     alert("Неверное число");
// }

//alert(String(true) + Number(true));


//Пусть в переменной num хранится число. Если это число не попадает в диапазон от 10 до 99, 
//то выведите на экран сообщение об этом. Если же число попадает в указанный диапазон, 
//то найдите сумму цифр этого числа. Если полученная сумма меньше или равна 9, 
//то выведите на экран сообщение о том, что сумма цифр однозначна, в противном случае 
//выведите сообщение о том, что сумма цифр двузначна.

//let num = 15;
//console.log(String(num)[0] + String(num)[0]);

// let lang = "en";

// switch (lang) {
//     case ("ru"): alert("ru");
//         break;
//     case ("en"): alert("en");
//         break;
//     default: alert("none");

// }

//let num = 12;

// let num = 0;
// console.log(num >= 0 ? 1 : -1);

// let ok = confirm('Вам уже есть 18?');
// if (ok){
// alert("good");
// } else {
//     alert("bad");
// }

// let i = 3;

// while (i >= 0) {
// 	console.log(i);
// 	i--;
// }

// console.log("=========================");

// let result = 0;
// for(let i = 3; i >= 0; i--){
// 	document.write("<p>" + i + "</p>");
// 	result += i;
// }
// console.log(result);

// let arr = [1, 2, 5, 4];
// for(let a of arr){
// 	console.log(a);
// }

// let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
// let res = 0;
// for(let o in obj){
// 	console.log(obj[o]);
// 	res += obj[o];
// }
// console.log(res);

// for(let i = 0; i < arr.length; i++){
// 	if(arr[i] == 3){
// 		console.log("есть");
// 		break;
// 	}
// }

// let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// let arr2 = [1, 2, 3, 4, 5, 6, 7];
// let obj = {};

// for(let i = 0; i < arr1.length; i++){
// 	obj[arr1[i]] = arr2[i];
// }
// console.log(obj);

// let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
// let result = {};

// for (let key in obj) {
// 	if (obj[key] % 2 == 0) {
// 		result[key] = obj[key];
// 	}
// }

// console.log(result);

// let obj = {
// 	employee1: 100,
// 	employee2: 200,
// 	employee3: 300,
// 	employee4: 400,
// 	employee5: 500,
// 	employee6: 600,
// 	employee7: 700,
// };

// for (let elem in obj) {
// 	if (obj[elem] <= 400) {
// 		let a = obj[elem] / 10;
// 		obj[elem] += a;
// 	}
// }
// console.log(obj);

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];
// let obj1 ={};

// for(let i = 0; i < arr1.length; i++){
// 	obj1[arr1[i]] = arr2[i];
// }
// console.log(obj1);

// let obj2 = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
// let mas1 = [];
// let mas2 = [];

// for(let elem in obj2){
// 	mas1.push(obj2[elem]);
// 	mas2.push(elem);
// }
// console.log(mas1);
// console.log(mas2);

// let obj3 = {
// 	1: 125,
// 	2: 225,
// 	3: 128,
// 	4: 356,
// 	5: 145,
// 	6: 281,
// 	7: 452,
// };
// let mas3 = [];

// for(let elem in obj3){
// 	let str = String(obj3[elem]);
// 	if(str[0] == 1 || str[0] == 2){
// 		mas3.push(obj3[elem]);
// 	}
// }
// console.log(mas3);

// /////////////////////////////////////////////////
// Дан следующий массив: let arr = ['a', 'b', 'c', 'd', 'e'];
// Создайте из этого массива следующий объект: let arr = {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'};

// Дан следующий массив: let arr = ['a', 'b', 'c', 'd', 'e'];
// Создайте из этого массива следующий объект: let arr = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
// /////////////////////////////////////////////////


// последовательность Фибоначчи
// let a = 0;
// let b = 1;

// for(let i = 0; i < 10; i++){
// 	let sum = a + b;
// 	a = b;
// 	b = sum;
// 	console.log(sum);
// }

// let str = '';

// for (let i = 0; i < 5; i++) {
// 	str += 'x';
// 	document.write(str + '<br>');
// }

// let s = "";
// for(let i = 1; i < 10; i++){
// 	for(let j = 1; j <= i; j++){
// 		s += i;
// 		document.write(s);
// 		s = "";
// 	}
// 	document.write("<br>");
// }

// let arr = [1, 2, 3, 4, 5];

// for (let elem of arr) {
// 	if (elem % 2 == 0) {
// 		console.log(elem);
// 	}
// }


// let arr = [];

// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];

// 	for (let j = 0; j <= 5; j++) {
// 		arr[i][j] = j + 1;
// 	}
// }

// console.log(arr);

// console.log(Math.sqrt(245));
// console.log(15**2);

// let arr = [4, 2, 5, 19, 13, 0, 10];
// let sum = 0;

// for(let i = 0; i < arr.length; i++){
// 	sum += Math.pow(arr[i], 3);
// }
// console.log(Math.sqrt(sum));

// let str = "grodno";
// let res = str.slice(str.length-2);
// console.log(str.slice(0, str.length-2)+res.toUpperCase());

// let s = "var_test_text";
// let sArr = s.split("_");
// for(let i = 0; i < sArr.length; i++){
// 	sArr[i] = sArr[i].substring(0, 1).toUpperCase() + sArr[i].substring(1);
// }
// let res1 = sArr.join("");

// //console.log(sArr.reverse());
// console.log(res1);

// let num = 12345;
// let arr = String(num).split('');

// let sum = 0;
// for (let digit of arr) {
// 	sum += +digit;
// }

// console.log(sum);

// function fu (num1, num2){
// 	let sum = 0;
// 	for(let i = num1; i <= num2; i++){
// 		sum += i;
// 	}
// 	alert(sum);
// }

// fu(1, 5);

// function yourName (name = "Anonim"){
// 	alert("Your name is " + name);
// }

// yourName("Aleh");

// function foo (num){
// 	return Math.sqrt(num);
// }

// let res = (foo(3) + foo(4)).toFixed(2);
// alert(res);

// let str = "abc def";
// alert(str.split("").reverse().join(""));

// let arr = [1, 2, 3, 4, 5];

// function func(arr) {
// 	let res = 0;

// 	for (let elem of arr) {
// 		res += elem;
// 	}

// 	alert(res);
// }

// func(arr);

// let arr = [1524, 1321, 4563, 7144, 2879];
// let res = [];

// for (let elem of arr) {
// 	if (isPairsDigitsCheckd(elem)) {
// 		res.push(elem);
// 	}
// }
// console.log(res);

// function isPairsDigitsCheckd(num) {
// 	let str = String(num);
// 	return (Number(str[0]) + Number(str[1])) == (Number(str[2]) + Number(str[3]));
// }
// let str = 'str'

// ;(function() {
// 	alert(1);
// })();

// let func = (function () {
// 	let count = 1;
// 	return function () {
// 		alert(count);
// 		if (count < 5) {
// 			count++;
// 		} else {
// 			count = 1;
// 		}

// 	}
// })();

// func();
// func();
// func();
// func();
// func();
// func();
// func();
