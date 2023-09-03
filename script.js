// alert("I'm invoked!");

// alert("I'm JavaScript!");
// alert('Hello'); // this line is not having semicolon
// alert(`Wor
//  ld`);
// alert(3 + 1 + 2); // this is multiple line code and its working

// let admin = 9,
//   fname = 10.5;
// fname = 'Guvi';
// lname = 'geek';
// admin = fname + ' ' + lname;
// alert(admin); // "Guvi geek"

// let fname = 10.5;
// fname = 'Guvi';
// lname = 'geek';
// let name = fname + ' ' + lname;
// alert(`hello ${name}`);

// let a = prompt('First number?');
// let b = prompt('Second number?');

// alert(parseInt(a) + parseInt(b));

// var a = 2 > 12; //Don't touch below this
// if (a) {
//   console.log('Code is Blasted');
// } else {
//   console.log('Diffused');
// }

// let a = (prompt('Enter a number?'), false); //Don't modify any code below this
// if (a) {
//   console.log('OMG it works for any number inc 0');
// } else {
//   console.log('Success');
// }

// let value = prompt('How many runs you scored in this ball');
// if (value == 4) {
//   console.log('You hit a Four');
// } else if (value == 6) {
//   console.log('You hit a Six');
// } else {
//   console.log("I couldn't figure out");
// }

// let login = 'Director';
// let message =
//   login == 'Employee'
//     ? 'Welcome Employee'
//     : login == 'Director'
//     ? 'Greetings'
//     : login == ''
//     ? 'No login'
//     : '';
// console.log(message);

// You cant change the value of the msg
// let message;
// if (null || 2 || undefined) {
//   message = 'welcome boss';
// } else {
//   message = 'Go away';
// }
// console.log(message);

// let message;
// let lock = false;
// //Dont change any code below this
// if (null || lock || undefined) {
//   message = 'Go away';
// } else {
//   message = 'welcome';
// }
// console.log(message);

// let message;
// let lock = false;
// //Dont change any code below this
// if ((lock && ' ') || undefined) {
//   message = 'Go away';
// } else {
//   message = 'welcome';
// }
// console.log(message);

//You can change only 2 characters
// let i = 3;
// while (i) {
//   console.log(i--);
// }

// let num = 1;
// let num2 = num + 1;
// let num3 = num2 + 1;
// console.log(num, num2, num3);
// let num4 = num3 + 1;
// let num5 = num4 + 1;
// let num6 = num5 + 1;
// console.log(num4, num5, num6);
// let num7 = num6 + 1;
// let num8 = num7 + 1;
// console.log(num7, num8);
// let num9 = num8 + 1;
// let num10 = num9 + 1;
// console.log(num9, num10);

//You are allowed to modify only one character
// for (let num = 2; num <= 20; num += 2) {
//   console.log(num);
// }

// let gifts = ['teddy bear', 'drone', 'doll'];
// for (let i = 0; i < 3; i++) {
//   console.log(`Wrapped ${gifts[i]} and added a bow!`);
// }

// let countdown = 100;
// while (countdown > 1) {
//   countdown--;
//   if (countdown == 0) {
//     console.log('bomb triggered');
//   }

// var lemein = '0';
// var lemeout = 0;
// var msg = '';
// if (lemein) {
//   msg += 'hi';
// }
// if (lemeout) {
//   msg += 'Hello';
// }
// console.log(msg);

// var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var new_string = '';

// for (var i = 0; i < 11; i++) {
//   new_string += numsArr[i];
// }
// console.log(new_string);

// var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var new_string = '';

// for (var i = 0; i < 11; i++) {
//   new_string += numsArr[i] + ', ';
// }
// console.log(new_string);

// var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// var new_string = '';

// for (var i = 10; i >= 0; i--) {
//   new_string += numsArr[i] + ' ';
// }
// console.log(new_string);

// var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// for (var i = 0; i <= 10; i++) {
//   if (numsArr[i] % 2 == 0) {
//     numsArr[i] = 'even';
//   }
// }
// console.log(numsArr);

// var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// for (var i = 0; i <= 10; i++) {
//   if (i % 2 == 0) {
//     numsArr[i] = 'even';
//   }
// }
// console.log(numsArr);

// var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum = 0;
// for (var i = 0; i <= 10; i++) {
//   sum += numsArr[i];
// }
// console.log(sum);

// var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum = 0;
// for (var i = 0; i < 10; i++) {
//   if (numsArr[i] % 2 == 0) {
//     sum += numsArr[i];
//   }
// }
// console.log(sum);

// var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum = 100;
// for (var i = 0; i <= 10; i++) {
//   if (numsArr[i] % 2 == 0) {
//     sum = sum + numsArr[i];
//   } else {
//     sum = sum - numsArr[i];
//   }
// }
// console.log(sum);
// if (condition) {
// } else {
// }

// var numsArr = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10, 11],
// ];
// for (var i = 0; i < numsArr.length; i++) {
//   console.log(numsArr[i]);
// }

// var numsArr = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10, 11],
// ];
// var str_all;
// for (var i = 0; i < numsArr.length; i++) {
//   var inner_array = numsArr[i];
//   for (var j = 0; j < numsArr[i].length; j++) {
//     str_all = str_all + numsArr[i][j].toString();
//   }
// }
// console.log(str_all);

// var numsArr = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10, 11],
// ];
// var str_all = 0;
// for (var i = 0; i < numsArr.length; i++) {
//   var inner_array = numsArr[i];
//   for (var j = 0; j < inner_array.length; j++)
//     if (numsArr[i][j] % 2 == 0) {
//       numsArr[i][j] = 'even';
//     }
// }
// console.log(numsArr);

// aa = (f, s, t) => {
//   console.log(f, s, t);
//   if (f > s && f > t) {
//     console.log(f);
//   } else if (s > f && s > t) {
//     console.log(s);
//   } else {
//     console.log(t);
//   }
// };
// aa(1, 2, 3);

// let n = 123;

// function add(n) {
//   let sum = 0;
//   while (n) {
//     sum += n % 10;
//     n = Math.floor(n / 10);
//   }
//   return sum;
// }

// console.log(add(n));

// var arr = ['guvi', 'geek', 'zen', 'fullstack'];
// var ano = function (arr) {
//   for (var i = 0; i <= arr.length; i++) {
//     console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
//   }
// };
// ano(arr);

// var as = [12, 34, 5, 6, 2, 56, 6, 2, 1];
// var s = as.reduce(function (a, c) {
//   if (c % 2 != 0) {
//     return a + c;
//   }
//   return a;
// }, 0);
// console.log(s);

// aa = (data) => {
//   var a = data;
//   for (i = 0; i < a.length - 1; i++) {
//     var l = '';
//     var s = a[i + 1];
//     var b = a[i];
//     l += s;
//     l += b;
//     i = i + 1;
//   }
//   if (a.length % 2 != 0) {
//     l += a[a.length - 1];
//   }
//   console.log(l);
// };
// aa('1234');
