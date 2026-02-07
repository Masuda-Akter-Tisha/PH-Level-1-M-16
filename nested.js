const collage ={
    name: 'Brahmanbaria govt. college',
    situated: 'College gate',
    class: [10, 12, 2, 3],
    school: {
        name: 'Sabera Sobhan Govt. Girls High School',
        situated: 'Bonikpara',
        class: [6, 2, 5, 12],
        events: {
            name: 'natok',
            participate: 'thousand'
        }
    }
}

const keys = Object.keys(collage);
//  const keys = Object.keys(collage.school);
// console.log(keys);

const values = Object.values(collage);
// const values = Object.values(collage.school);
// console.log(values);

// const value = collage.school.class[0];
// const value = collage['school']['class'][0];
// console.log(value);
collage['school']['class'][0] = 'nursery';

collage.school.events.name = 'nach';

 delete collage.school.events.participate;

console.log(collage);


