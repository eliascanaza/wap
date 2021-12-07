/**
 * Question 1:
 */
/*
Draw a lexical environment diagram for the right code and show:
1. global Lexical Environment (LE): 
    LE{makeArmy: fn, outer: null}; TDZ : army
    army = function(){alert(i);}

2. LE for makeArmy():
    LE{parameter: {length:0}, outer: global}; TDZ : shooters, i
    shooters[function(){alert(i);}, function(){alert(i);}]
    i= 0,1,2
    while

3. LE for LE of while loop
    LE{outer: makeArmy}; TDZ: shooter
    shooter = function(){alert(i);}

4. LE for army[0]
    LE{arguments:{length:0}, outer: closure scope}
*/
//5. Can you fix the code?
function makeArmy() {
    let shooters = [];
    for (let j = 0; j< 2; j++) {
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

//6. How will the diagram change?
    //With the code fixed, the amount of 'alerts' will depend of the 'j' and will display the correct index

/**
 * Question 2:
 */

function printNumbers(from, to) {
    let timerID = setInterval(()=>{
        console.log(from);
        if(from++ == to)
            stop();
    }, 1000);

    function stop(){
        clearInterval(timerID);
    }
}
printNumbers(10, 15);

/**
 * Question 3:
 */

/*
When will the scheduled function run?
Solution: After the loop

What is alert going to show?
Solution: 100000000
*/
