let language = 'I Love JavaScript';
let convert = language.split('');
console.log(convert);
let reversing = convert.reverse();
console.log(reversing);
let joining = reversing.join('');
console.log(joining);


let name = ['a','m','e','n','a',' ','a','m','i'];
console.log(name.join(''));

let a = ['love'];
console.log(a.reverse());


//for of loop
let sentence = 'I Love Rose';
let rev = '';
for(let letter of sentence){
     rev = letter + rev;
}
   console.log(rev);

   //plain for loop
  let flower = 'marigold';
  let revs = '';
   for(let i = flower.length - 1; i >= 0; i --){
      revs = revs + flower[i];
   }
   console.log(revs);

   //while loop
   let fruit = 'banana';
   let r = '';
   let n = fruit.length - 1;
   while(n >= 0){
      r = r + fruit[n];
      n --;
   }
       console.log(r);


       //do-while loop
       let man = 'Tasif';
       let re = '';
       let x = man.length - 1;
       do{
         re = re + man[x];
         x --;
       }
       while(x >= 0);
       console.log(re);
// const sentence = 'rose';
//  console.log(sentence.length);
//  console.log(sentence[0]);
// for(let letter of sentence){
//    console.log(letter);
// }

 