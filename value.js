let person = {
    name: 'Tisha',
    age: 23,
    occupation: 'Developer',
    salary: 25000,
    'is Good': true,
    favoriteFood: ['vorta', 'elish mach', 'chingri mach'],
    learning:{
        structure: 'html',
        design: 'css',
        behavior: 'JavaScript',
        
    }
}

 console.log(person.name);
 person.name = 'Tasif';
 console.log(person.name);

 let pesha = person.occupation;
 pesha = 'student'
 console.log(pesha);

 let beton = 'salary';
 console.log(person[beton]);

 let priyoKhabar = 'favoriteFood';
person[priyoKhabar] = ['kocho', 'vath'];

 console.log(person['age']);
 person['age'] = 30;
 console.log(person['age']);
 
person['is Good'] = false;
//  console.log(person.learning.structure);
//  person.learning.structure = 'html5';
let pora = 'learning';
person[pora]['structure'] = 'html5'
 

 console.log(person);
