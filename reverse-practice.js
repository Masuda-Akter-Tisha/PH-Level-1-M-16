//This is not possible because .reverse() is a array method
// let name = 'masuda Akter Tisha'
// console.log(name.reverse());

//shortly
// let name = 'masuda Akter Tisha';
// let stringReverse = name.split('').reverse().join('');
// console.log(stringReverse);

//normal rules
// let name = 'masuda Akter Tisha';
// let convertArray = name.split('');
// console.log(convertArray);
// let arrayReverse = convertArray.reverse();
// console.log(arrayReverse);
// let stringReverse = arrayReverse.join('');
// console.log(stringReverse);

//for of loop
// let name = 'Masuda Akter Tisha';
// let reverse = '';
// for(let nam of name){
//     reverse = nam + reverse;
// }
// console.log(reverse);

//plain for
// let name = 'Masuda Akter Tisha'
// let reverse = '';
// for(let i = name.length - 1; i >= 0; i --){
//     reverse = reverse + name[i];
// } 
// console.log(reverse);

// alternative
let name = 'Masuda Akter Tisha'
let reverse = '';
for(let i = 0; i < name.length; i ++){
    reverse = name[i] + reverse ;
} 
console.log(reverse);

//while loop
// let name = 'Masuda Akter Tisha'
// let reverse = '';
// let i = name.length - 1;
// while(i >= 0){
//     reverse = reverse + name[i];
//     i --;
// }
// console.log(reverse);
//do while
// let name = 'Masuda Akter Tisha'
// let reverse = '';
// let i = name.length - 1;
// do{
//     reverse = reverse + name[i];
//     i --;
// }
// while(i >= 0)
// console.log(reverse);
