setInterval(() => alert("hello"), 600000);

function makeArmy() {
    let shooters = [];
    for (let j = 0; j < 2; j++) {
        let shooter = function () {
            console.log(j);
        };
        shooters.push(shooter);
    }
    return shooters;
}
let army = makeArmy();
army[0]();
army[1]();


let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        const self = this;
        self.students.forEach(function (student) {
            console.log(self.title + ": " + student);
        });
    }
};

group.showList.bind(group)();
group.showList.call(group);
group.showList.apply(group);



const students = [
    { name: 'Quincy', grade: 96, courses: ['cs301', 'cs303'] },
    { name: 'Jason', grade: 84, courses: ['cs201', 'cs203'] },
    { name: 'Alexis', grade: 100, courses: ['cs105', 'cs211'] },
    { name: 'Sam', grade: 65, courses: ['cs445', 'cs303'] },
    { name: 'Katie', grade: 90, courses: ['cs303', 'cs477'] }
];

let result = students.filter(s => s.courses.indexOf('cs303') != -1)
    .map(s => s.grade)
    .reduce((sum, grade, index, arr) => sum + grade / arr.length, 0);

console.log(result);


let result = students.reduce((acc, elem, index, arr) => {
    if (typeof acc == 'number')
        return (acc + elem.grade) / arr.length;
    else
        return (acc.grade + elem.grade) / arr.length;
}, 0);
console.log(result);


setInterval();



let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function() {
        const self = this;
        self.students.forEach(function(student) {
            console.log(self.title + ": " + student);
        });
    }
};
group.showList.bind(group)();
group.showList.call(group);
group.showList.apply(group);