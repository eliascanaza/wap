/**
 * Exercise 1:
 */
function Clock({ template }) {
    let timer;
    function render() {
        console.log("render");
        let date = new Date();
        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
        let output = template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);
        console.log(output);
        //after 10 seconds 
        setTimeout(clock.stop, 10000);
    }
    this.stop = function () {
        console.log("stop");
        clearInterval(timer);
    };
    this.start = function () {
        console.log("start");
        render();
        timer = setInterval(render, 1000);
    };
}
let clock = new Clock({ template: 'h:m:s' });
clock.start();

//1.
//setTimeout(clock.stop, 10000);

//2.
//render();

//3. 
//let timer;

//4.
//Object of Clock

//5. 
//It does not has Closure

//6.
//variable: timer
//function: render()

//7.
//stop() and start()

/**
 * Exercise 2:
 */

class LinkdList {
    constructor() { }
    add(elem) {
        if (this.value === undefined) {
            this.value = elem;
            this.next = null;
        } else {
            let node = this;
            while (node.next) {
                node = node.next;
            }
            node.next = {
                value: elem,
                next: null
            }
        }
    }
    remove(elem) {
        let node = this;
        let prev = null;
        while (node) {
            if (node.value === elem) {
                if (prev == null) {
                    this.value = node.next.value;
                    this.next = node.next.next;
                } else {
                    prev.next = node.next;
                }
                return true;
            }
            prev = node;
            node = node.next;
        }
        return false;
    }
    print() {
        let node = this;
        let res = "LinkdList {";
        while (node) {
            res += node.value + ",";
            node = node.next;
        }
        res = res.slice(0, -1);
        res += "}";
        console.log(res);
    }
}
let link = new LinkdList();
link.add(3);
link.add(30);
link.add(2);
link.print();
link.remove(30);
link.print();

/**
 * Exercise 3:
 */
function Student(studentId) {
    this.studentId = studentId;
    this.answers = [];
}
Student.prototype.addAnswer = function (question) {
    this.answers.push(question);
}

function Question(qid, answer) {
    this.qid = qid;
    this.answer = answer;
}

Question.prototype.checkAnswer = function (answer) {
    let correct = false;
    correct = (this.answer == answer);
    return correct;
}

function Quiz(questions, students) {
    this.questions = new Map();
    questions.forEach(q => this.questions.set(q.qid, q.answer));
    this.students = students;
}

Quiz.prototype.scoreStudentBySid = function (sid) {
    let student = this.students.filter((elem) => elem.studentId === sid);
    //needs first student id
    student = student[0];
    return student.answers.reduce((sum, elem, index, arr) => {
        if (elem.checkAnswer(this.questions.get(elem.qid))) {
            sum++;
        }
        return sum;
    }, 0);
}
Quiz.prototype.getAverageScore = function () {
    return this.students.reduce((sum, elem, index, arr) => {
        return sum + this.scoreStudentBySid(elem.studentId) / arr.length;
    }, 0);
}

const questions = [new Question(1, 'b'), new Question(2, 'a'), new Question(3, 'b')];
const student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));
const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));
const students = [student1, student2];
const quiz = new Quiz(questions, students);
let scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10);
let scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11);
let average = quiz.getAverageScore();
console.log(average);