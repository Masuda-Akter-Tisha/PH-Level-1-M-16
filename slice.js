//slice
const address = 'Brahmanbaria';
const part = address.slice(0,7);
console.log(part);

//substring
const country = 'Bangladesh'
console.log(country);
console.log(country.substring(0,6));
//substr
const name = 'Masuda Tisha';
const lastPart = name.substr(7,10);
console.log(lastPart);
//split
const tags ='I Love JavaScript';
const element = tags.split(' ',2);
console.log(element.length);

//join-----array
const i = ['karim', 'rahim', 'fahim'];
console.log(i.join(' + '));