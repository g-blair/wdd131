let pets = ['goldfish', 'dog', 'rhino'];

console.log(pets.length);

pets[3] = 'bunny';

console.log(pets);

pets.push('lizard');

console.log(pets);

const steps = ['one', 'two', 'three'];

steps.forEach(showSteps);

function showSteps(item){
    console.log(item);
}

let myList = document.querySelector('#myList');

const stepsHtml = steps.map(listTemplate);

function listTemplate(item) {
    return `<li>${item}</li>`
}

myList.innerHTML = stepsHtml.join('');

let grades = ['A', 'B', 'D'];

let points;

let gpaPoints = grades.map(convert);

function convert(grade){
    switch (grade){
        case 'A':
            points = 4;
            return points;
            break;
        case 'B':
            points = 3;
            return points;
            break;
        case 'C':
            points = 2;
            return points;
            break;
        case 'D':
            points = 1;
            return points;
            break;
        case 'F':
            points = 0;
            return points;
            break;
        default:
            alert('Not a valid grade');
    }
    return points;
}

console.log(gpaPoints);
console.log(grades);

let totalPoints = gpaPoints.reduce(getTotal);

function getTotal(total, item){
    return total + item;
}

console.log(totalPoints);
let gpaAverage = totalPoints/gpaPoints.length;

console.log(gpaAverage);


const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const shortWords = words.filter(function(word){
    return word.length < 6;
})

console.log(shortWords);


const students = [
    {last: 'Andrus', first: 'Aaron'},
    {last: 'Masa', first:'Manny'},
    {last: 'Tanda', first: 'Tamanda'}
];

console.log(students);