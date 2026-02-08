const person = {
    name: 'Tisha',
    age: 23,
    isGood: true,
}

//for in
for(let key in person){
    // console.log(key);
    // console.log(person[key]);
    console.log('key:', key, ', value:', person[key]);
}


//object.keys
for(let key of Object.keys(person)){
    //console.log(key);
}
//object.values
for(let value of Object.values(person)){
    //console.log(value);
}
//object.entries
for(let [key,value] of Object.entries(person)){
    //console.log(key, value);
}