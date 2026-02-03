const name = 'Tisha';
const country = "Bangladesh";
const district = `Brahmanbaria`;
const upuzila = new String('B-baria');

console.log(typeof name);
console.log(typeof upuzila);
console.log(upuzila);
//Array------->mutable,changeable
const num = [20, 30, 45, 38, 23];
console.log(num);
// console.log(num.length);
// console.log(num[0]);
num[1] = 33;
console.log(num);

//String------->immutable,not changeable
const capital = 'Dhaka';
console.log(capital.length);
console.log(capital[2]);
capital[0] = 'f';
console.log(capital);