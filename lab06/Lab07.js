/**
 * Exercise 1:
 */
//Using Wrapper
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
};

let user = {
    name: 'Jhon',
    loginOk() {
        alert(`${this.name} logged in`);
    },
    loginFail() {
        alert(`${this.name} failed to log in`);
    }
};
askPassword(() => user.loginOk(), () => user.loginFail());

//Bind, Call, Apply 
const askPassword = function (ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
};

let user = {
    name: 'Jhon',
    loginOk() {
        alert(`${this.name} logged in`);
    },
    loginFail() {
        alert(`${this.name} failed to log in`);
    }
};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
askPassword(() => user.loginOk.call(user), () => user.loginFail.call(user));
askPassword(() => user.loginOk.apply(user), () => user.loginFail.apply(user));

/**
 * Exercise 2: I applied bind and self pattern
 */

let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function() {
        const selft = this;
        selft.students.forEach(function (student) {
            console.log(selft.title + ": " + student
            );
        });
    }
};

let a = group.showList.bind(group); 
a();
