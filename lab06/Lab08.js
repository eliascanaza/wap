/**
 * Exercise 1: Using Object literal
 */
let student = {
    firstName: "",
    lastName: "",
    grades: [],
    inputNewGrade: function (newGrade) {
        this.grades.push(newGrade);
    },
    computeAverageGrade: function () {
        let total = 0;
        this.grades.forEach(grade => {
            total += grade;
        });
        return total / this.grades.length;
    }
}
let students = [];
students[0] = Object.create(student);
students[0].firstName = "Elias";
students[0].lastName = "Mamani";
students[0].grades = [];
students[0].inputNewGrade(100);
students[0].inputNewGrade(50);
console.log("0: " + students[0].computeAverageGrade());

students[1] = Object.create(student);
students[1].firstName = "Yugal";
students[1].lastName = "Modi";
students[1].grades = [];
students[1].inputNewGrade(90);
console.log("1: " + students[1].computeAverageGrade());

let total = 0;
let average = students.reduce((acc, elem, index, arr) => {
    return acc + elem.computeAverageGrade() / arr.length;
}, 0);
console.log(average);

/**
 * Exercise 2: Using Constructor
 */
function Student(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
    this.grades = [];
}

Student.prototype.inputNewGrade = function (newGrade) {
    this.grades.push(newGrade);
}
Student.prototype.computeAverageGrade = function () {
    let total = 0;
    this.grades.forEach(grade => {
        total += grade;
    });
    return total / this.grades.length;
}

let students = [];
students[0] = new Student("Elias", "Mamani");
students[0].inputNewGrade(100);
students[0].inputNewGrade(50);
students[0].computeAverageGrade();

students[1] = new Student("AYugal", "Modi");
students[1].inputNewGrade(90);
students[1].computeAverageGrade();

let average = students.reduce((acc, elem, index, arr) => {
    return acc + elem.computeAverageGrade() / arr.length;
}, 0);
console.log(average);

/**
 * Exercise 3: Sort method
 */
function mergeSort(arr) {
    const half = arr.length / 2;
    if (arr.length <= 1) {
        return arr;
    }

    const left = arr.splice(0, half);
    const right = arr;
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let sortedArr = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortedArr.push(left.shift());
        } else {
            sortedArr.push(right.shift());
        }
    }

    return [...sortedArr, ...left, ...right];
}

Array.prototype.sort(function () {
    let arr = this;
    return mergeSort(arr);
});

console.log([7, 5, 2, 4, 3, 9].sort());

/**
 * Exercise 4: Linkdlist
 */
let linkedlist = {};
linkedlist.add = function (elem) {
    if(this.value === undefined){
        this.value = elem;
        this.next = null;
    }else {
        let node = this;
        while(node.next){
            node = node.next;
        }
        node.next = {
            value: elem,
            next: null
        };
    }
};
linkedlist.remove = function(elem){
    let node = this;
    let prev = null;
    while(node){
        if(node.value === elem){
            if(prev == null){
                this.value = node.next.value;
                this.next = node.next.next;
            }else{
                prev.next = node.next;
            }
            return true;
        }
        prev = node;
        node = node.next;
    }
    return false;
};
linkedlist.print = function () {
    let result = "LinkdList{";
    let node = this;
    while(node){
        result += node.value + ",";
        node = node.next;
    }
    result = result.slice(0, -1);
    result += '}';
    console.log(result);
}
linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.print();
linkedlist.remove(3);
linkedlist.print();

//constructor function
function LinkedList() {
    
}
LinkedList.prototype.add = function(elem){
    if(this.value === undefined){
        this.value = elem;
        this.next = null;
    }else {
        let node = this;
        while(node.next){
            node = node.next;
        }
        node.next = {
            value: elem,
            next: null
        };
    }
}

LinkedList.prototype.remove = function (elem) {
    let node = this;
    let prev = null;
    while (node){
        if(node.value === elem){
            if(prev == null){
                this.value = node.next.value;
                this.next = node.next.next;
            }else {
                prev.next = node.next;
            }
            return true;
        }
        prev = node;
        node = node.next;
    }
    return false;
}

LinkedList.prototype.print = function () {
    let result = "LinkedList: {";
    let node = this;
    while(node){
        result += node.value + ",";
        node = node.next;
    }
    result = result.slice(0, -1);
    result += "}";
    console.log(result);
}

let linkedlist = new LinkedList();
linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.print(); //in the console, you should see: LinkedList{1,2,3}
linkedlist.remove(3);
linkedlist.print(); //in the console, you should see: LinkedList{1,3}
