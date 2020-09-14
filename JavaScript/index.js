// used in index.html
console.log ('Hello everyone');
const name="Sanch"
let a= 18
let result= name+a
console.log(result);
//let result is a function


function sayHey (person) { 
//console.log ('Hey' + person + '!')
console.log ('How are you?');

}

function conversation(){
    console.log ('Hey Sanch')
}

function double (number); {
    // function body
    number + number
    //or
     return number * 2; 
}
// double (10); // -> 20
// double (5);  // -> 10

/* const doubleSix = double(6);
 to stop a function from running don't declare it */

 const personA = {
     firstName: 'Monique',
     likes: 'Chocolate'
 };

 const personB = personA;
 
 console.log ("Before") ;
 console.log (personA.firstName) ;
 console.log(personB.firstName) ;

 personA.firstName = "Monique" ;

 console.log ("After");
 console.log(personA.firstName);
 console.log(personB.firstName);


console.log ()

/* Task- maths equations using X and y variables */

const x = 6;
const y = 3;

// in your browser you should get just '6' and '3' //

const x= 6 * 2 ;
const y= 6 / 2 ;

const x = 2 * 2 ;
const y = 4 / 2 ;


/*const drivingAge = 16
let age
(if age < 17 

    /* Create 2 variables, one for your age and the other for the minimum
driving age. Then do a console.log checking whether you are old
enough to drive */

    const myAge = 18;
    const minDrivingAge = 17;
    const oldEnough =MyAge > minDrivingAge;
    console.log(oldEnough)
    true // would say true because I'm 18 - legal driving age 


// final task:

/*if (mark < 90 ) = A+
if (mark< 80 )


if (marks < 90) {
   ;
  }
*/ 
// correct statement

if mark => 90;
let mark = 80;
if (mark = 80 <= 90)
{
    console.log ('A');
}

else if (mark <= 80) {
    console.log ('B');
}

// in class edition

function grades (marks) {
    if (marks > 90) {
        console.log ('A+');

    }
}

if (marks > 80 && marks <= 90) {
    console.log ('A');

// or you can do
/* if (marks > 80 && marks <= 90) {
    console.log ('A'); */

}

if (marks > 70 && marks <= 80) {
    console.log ('B';)

}

/* another way to do if statements with conditionals is with
switch statemnts */

/* let (a) {
    case 5:
    console.log ('is it 10') -- appear as is it 10 in browser
    case 10:
        console.log ('is it 10');
        default:
            console.log ('default');

            if (a=== 5) {
                console.log ('is it 5');

            }

// same thing but written out differently //

            else of (a===10) {
                console.log ('is it 5')
            }
            else if (a)

}

/* Homework- take grade task and convert to switch instead of 
if statements */

// C if marks is greater than 60 and less than or equal to 70 //

 if (marks )
 Console.log ('C');



/* Loops */

// while loops //

let RandomNumber;
while (condition)


// Recap

/* while loops -- increasing/ decreasing value of i
let i=0
while (i < 10) {
    i ++;
}
console.log('Number: ' + i);
 start with value and keep looping until another expression is reached

 for loops
  for (let i=0; i < 10; i++) {
      console.log ('number' + 1)
  }

  /*arrays 
  const animals = ['cat', 'dog', 'rabbit', ];
  //array methods
  animals.sort(); << this will sort animals in alphabetical order
console.log(animals.sort()) now logged as alpahbetical

console.log (animals.reverse) rearrange animals reverse 
*/ 


//DOM- Document Object Model//
const description = document.getElementById

/* how the DOM is represented:

<html>
<head>
  <title> Codher! </title>
 </head>
  <body>
      <h1> Codher! </h1>
   <p> Codher ! <strong>
   </p>  
   </body>
 </html>

 */

 // Interacting with the DOM ///
 console.log (document.body.parentNode)

 function listDomELements () {
     const Children = document.body.childNodes

     for (let i=0; i <Children.length; i=i)
 }


 

 









































 //Note//

 // 2nd September //

/* Expressions */ 

/* Variables 
const name = Michelle Obama 
name= 'Karen'; Error


let place= Washington DC; << if you wanna change variable
place= Chicago 

var age= 56
age= 57;


Functions - a module of code

function sayHey ();
console.log ('Hey');

//sayHey ();

const sayHi = function () {  -- anonymous function but can become assigned
    to a variable

    console.log
}

sayHi = function () {
    
}

const sayHello= () => console.log ('Hello');


/* Parameters */
/* function add (a,b) {
   // console .log (a + b)
   
// 

return Values

function addReturn (a, b)
return a+b

let addReturn
let seven= addReturn (1,6);
}

let seven= addReturn 


// recap from 3rd September//

/* operators */
// + / - * (add, divide, subtract, multiply)

/* % modulus
** exponetitation
++ increment
-- Decrement

2 ** 4 (2 to the power of 4)
5 % 2   (what does this mean?)

let a=1

/* comparisons */

/* let applesEqualOranges = 'apples' !== applesEqualOranges
5 > 2 // true
3 < 4 // true

conditional logic
if (applesEqualOranges) {
    console.log ('Apples and oranges are the same')
}

// Switch statements//

/* let marks = 95;

function grades (marks) {
    switch (true) {
        case (marks > 90)
        console.log ('A+');
        break;
        case (marks > 80 && marks <= 90):

    }
}



/* Arrays */

const cat = animals [0];
const dog = animals [1];
const wolf = animals [2];
const lion = animals [3];
const eagle = animals [4];
const zebra = animals [5];

// length property //

animals.length;







