
//------------------------------------------------------ variables Data types --------------------------------------------// 

// var a = 12;
// var b = 14;
// var c = (a + b);
// console.log(c);


// var b;
// // console.log(a);

// b = ("Saurabh");
// console.log(b);x`


// ---------------------------------------------------- variables Naming Rules --------------------------------------------// 


// var helo/Sir = 10; // don't do like that / @ & something in between 👎

// var heloSir = 10; // correct camelCase 👍

// var 3years = 3;   // before number use $ or _ 👎

// var _3years = 3;  // correct 👍
// or
// var $3years = 3; 

// var function = 10; // don't use pre define functions name 👎

// use different name for naming function 👍
// var fullAge = 10;



// ====================================================  String template literals  ============================================


// var name = 'John';
// var lastName = 'Smith';
// var job = 'Driver';

// // console.log(
// //     name + " " + lastName + " is a " + job  // is that section if we want gap in between so we need to give empty space in between the quotes.
// //     )  

// // console.log(
// //     `${name} ${lastName} is a ${job}`   // is that section if we want gap in between so no need to give anything simply you write what you want to 
// // );


// console.log(
//     'string is \n\
//     multiple \n\
//     lines'
// );           // through string if we want to put our text in two line so we can use {\n\} this syntaxt


// console.log(
//     `string is 
//     multiple 
//     lines`
// );           // through {Back Tick} if we want to put our text in two line so we can't use any syntaxt for that 





//-------------------------------------------------- variables Mutation and type coercion ----------------------------------------------// 

// what is the defferance difference type coercion and type conversion { Question }


// type coercion ⤵️

//  var firstName, age, job , ismarried;

//  firstName = 'Saurabh';
//  age = 18;
//  job = 'Teacher';
//  ismarried = false;

//  console.log(firstName + ' ' + 'just + age +  ' ' + 'years ' + 'old.' + 'He is a' + ' ' + job + '.' + 'He is married' + ' ' + ismarried )


//  variable mutation ⤵️
// reasign values is called variable mutation

// age = 28;
// job = 'driver';

// alert(firstName + ' ' + 'just ' + age +  ' ' + 'years ' + 'old.' + ' ' + 'He is a' + ' ' + job + '.' + ' ' + 'He is married' + ' ' + ismarried )


// var lastName = prompt ('What is his last name ?');
// console.log(firstName + ' ' + lastName);


// ------------------------------------------------------ Basic operaters 💥 ------------------------------------------------------------//

// var johnAge, markAge , smithAge ;

// now = 2023;
// johnAge = (29);
// markAge = (15);
// smithAge = (10);    


// yearsJohnAge = (now - johnAge);
// yearsMarkAge = (now - markAge);
// yearsSmithAge = (now - smithAge);

// console.log(yearsJohnAge, yearsMarkAge, yearsSmithAge);
// console.log(now+2)
// console.log(now-2)
// console.log(now*2)
// console.log(now/2)





// // Logical operaters 

// var ageOlder = johnAge > markAge;
// console.log(ageOlder);

// // type of operaters
// console.log(typeof johnAge);
// console.log(typeof ageOlder);
// console.log(typeof 'Mark john is older then john')

// var a;
// console.log(a);






// Operator Precedence Important concept 

// var now = 2022;
// var yearsJohnAge = 1998;
// var fullAge = 20;

// var isFullAge = now - yearsJohnAge >= fullAge;   //// which sign have high precedence that one excute first link for precedence  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
// console.log(isFullAge);

// var johnAge = now- yearsJohnAge;
// var markAge = 36;

// var average = (johnAge + markAge) / 2;     //// which sign have high precedence that one excute first link for precedence  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
// console.log(average);







// Multiple assignments

// var x, y; 

// x = y =  (3 + 5) * 4 - 6; // 8 * 4 - 6  // 32 - 6  // 26
// console.log(x , y);  // result 26






// more operator

// x *= 2; // means x = x * 10;
// console.log(x);  // result 26 x 26 = 52 

// x += 10;  // means x = x + 10;
// console.log(x)  // result 52 + 10 = 62

// x++;  // or x--;
// console.log(x);  // result 62 + 1 = 63   //for x--; 62-1 = 61;  



// ---------------------------------------------------- Coding challenge crack 💥 --------------------------------------------------

// var marksMass = 60;
// var marksHeight = 1.82;   // means 6 feet = 1.82 meter
// var marksBmi = marksMass / (marksHeight * marksHeight);
// console.log(marksBmi);

// var johnsMass = 70;
// var johnsHeight = 1.52;  // 5 feet = 1.52 meter
// var johnsBmi = johnsMass / (johnsHeight * johnsHeight);
// console.log(johnsBmi);

// var compareBmi = marksBmi > johnsBmi;
// console.log('Is there marks bmi is higher then john ?' + compareBmi);


// ------------------------------------------ Coding challenge crack 💥 through if and else condition -------------------------------


// var marksMass = 60;
// var marksHeight = 1.82;   // means 6 feet = 1.82 meter
// var marksBmi = marksMass / (marksHeight * marksHeight);
// console.log(marksBmi);

// var johnsMass = 82;
// var johnsHeight = 1.55448;  // 5 feet = 1.52 meter
// var johnsBmi = johnsMass / (johnsHeight * johnsHeight);
// console.log('vyash bro bmi is' + ' ' + johnsBmi);

// if (marksBmi > johnsBmi) {
//     console.log('Marks bmi is high')
// }
// else {
//     console.log('john bmi is high')
// }


// --------------------------------------------------- if else condition 💥 ---------------------------------------------------

// var firstName = 'john';
// var civilStatus = 'married'

// if (civilStatus === 'married') {
//     console.log(firstName + ' ' + 'is married')
// }
// else{
//     console.log(firstName + ' ' + 'is single')
// }


// var isMarried = false;  // we also trigered through true and false.

// if (isMarried) {
//     console.log(firstName + ' ' + 'is Married')
// }
// else{
//     console.log(firstName + ' ' + 'is Single')
// }


// -------------------------------------------------- boolean logic 💥  ---------------------------------------------------------------

// Three boolean logic is there (AND && !) 

// AND 
// True + True = true
// false + false = false
// this is the condition


// &&
// True + false = true
// false + true = false
// atleast one is true for making true

// !
// one is true so automatically other one is false like that its works

// ===================================================== Examples =======================================================

// var firstName = 'John';
// var age = 19;

// if (age <= 18) {
//     console.log(firstName + ' ' + 'is a boy');
// }

// else if (age > 18 && age < 18) {  // both true or false then execute. one thing here first age > 18 and age < 18 this one execute because of their higher precedent in compariosn of && thats why they execute first.
//     console.log(firstName + ' ' + 'is a teenager 1.' + ' ' + age);
// }

// else if (age > 18 || age < 17) {  // atleast one is true then execute. one thing here first age > 18 and age < 18 this one execute because of their higher precedent in compariosn of || thats why they execute first.
//     console.log(firstName + ' ' + 'is a teenager 2.' + ' ' + age);
// }

// if (age > 20 && age < 30)  {  // 
//     console.log(firstName + ' ' + 'is a Adult.');
// }

// else if (age > 30)  {
//     console.log(firstName + ' ' + 'is a man');
// }






// ----------------------------------------- * Ternery operators ans switch statement * 💥 -------------------------------------------

// ternery operator 

// var firstName = 'Smith';
// var age = 23;

// age >= 18 ? console.log(firstName + ' ' + 'drink beer')
// : console.log(firstName + ' ' + 'drink juice');


// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);


// same concept in if or else condition

// first way ---------------

// if (age >=18) {
//     console.log(firstName + ' ' + 'drink beer')
// }
// else {
//     console.log(firstName + ' ' + 'drink juice');
// }

// ---------------------------------------------- or --------------------------------------------------

// Second way ---------------

// if (age >= 22) {
//     var drink = 'beer';
// }
// else {
//     var drink = 'juice';;
// }




// ====================================================== ** Switch statement ** 💥 ====================================================== //


// Switch statement

// var firstName = 'Amit';
// var job = 'driver';
// var age = 20;

// switch (job) {
//     case 'teacher': console.log(firstName + ' ' + ' is a teacher' );break
//     case 'driver': console.log(firstName + ' ' + ' is a driver');break
//     case 'poet': console.log(firstName + ' ' + ' is a poet');break
//     case 'writer': console.log(firstName + ' ' + ' is a writer');break
//     case 'player': console.log(firstName + ' ' + ' is a player');break
//     default : console.log(firstName + ' ' + 'do something')
// }



// if and else method through switch case above example through switch method

// switch (true) {

//     case age <= 18:
//     console.log(firstName + ' ' + 'is a boy');break

//     case age > 18 && age < 18: 
//     console.log(firstName + ' ' + 'is a teenager 1.');break

//     case age > 18 || age < 17:
//     console.log(firstName + ' ' + 'is a teenager 2.');break

//     case age > 20 && age < 30:
//     console.log(firstName + ' ' + 'is a Adult.');break

//     default:
//     console.log(firstName + ' ' + 'is a man');
// }



// ================================================= Truthy and Falsy Values and Equality Operators 💥 ==============================

// Falsy values : undefined, Nan, ''(empty string), 0, Null.
// Truthy values: Not falsy value.

// var height;
// height = 0;

// if (height) {
//     console.log('variable defined output' + ' ' + height);
// }

// if (height || height === 0) { //you can defined the undefined value through this method for true that condition
// console.log('variable defined output' + ' ' + height); 
// }

// else {
//     console.log('variable is not defined output' + ' ' + height);
// }



// =============================================================== Coding Challenge 💥 ================================================= //

// var johnTeamName = 'John Team';
// var team1 = 89;
// var team2 = 120;
// var team3 = 103;
// var johnTeamAvg = (team1 + team2 + team3) / 3;

// // or 
// var johnTeamAvg = (89 + 120 + 124) / 3;/// draw number 
// var johnTeamAvg = (89 + 120 + 118) / 3;
// console.log(johnTeamAvg + ' ' + 'John');


// var mikeTeamName = 'Mike Team';
// var team1 = 116;
// var team2 = 94;
// var team3 = 123;
// var mikeTeamAvg = (team1 + team2 + team3) / 3;

// // or 
// var mikeTeamAvg = (116 + 94 + 123) / 3;
// console.log(mikeTeamAvg + ' ' + 'mike');

// var marryTeamName = 'Marry team';
// var marryTeamAvg = (97 + 134 + 105) / 3;
// console.log(marryTeamAvg + ' ' + 'marry');

// var highest = [johnTeamAvg, mikeTeamAvg, marryTeamAvg];

// highest.sort(function(a,b){

//     return b - a;
// });

// var highest1 = highest.shift();

// console.log(`${highest1} `)


// if (johnTeamAvg > mikeTeamAvg && johnTeamAvg > marryTeamAvg) {
//     console.log(`${johnTeamName} scored ${johnTeamAvg} points Mike team win the event, Congratulations mike team`);
// }

// else  if (mikeTeamAvg > johnTeamAvg && mikeTeamAvg > marryTeamAvg){
//     console.log(`${mikeTeamName} scored ${mikeTeamAvg} points Mike team win the event, Congratulations mike team`);
// }

// else  {
//     console.log(`${marryTeamName} scored ${marryTeamAvg} points Marry team win the event, Congratulations mike team`);
// }




// ---------------------------------------------------- for three people comparison 💥 ------------------------------------------


// if (mikeTeamAvg > johnTeamAvg && mikeTeamAvg > marryTeamAvg){
//     console.log(mikeTeamName + ' ' + 'scored' + ' ' +  mikeTeamAvg  + ' points' + ' ' + 'Mike team win the event, Congratulations Mike team');
// }

// else  if (johnTeamAvg > mikeTeamAvg && johnTeamAvg > marryTeamAvg){
//     console.log(johnTeamName + ' ' + 'scored' + ' ' +  johnTeamAvg  + ' points' + ' ' + 'John team win the event, Congratulations John team');
// }

// else  if (marryTeamAvg > johnTeamAvg && marryTeamAvg > johnTeamAvg){
//     console.log(marryTeamName + ' ' + 'scored' + ' ' +  marryTeamAvg  + ' points' + ' ' + 'Marry team win the event, Congratulations Marry team');
// }

// else {
//     console.log('Its Draw During some issues');
// }



// ===========================================================  Function 💥  ========================================================= //

//------- Ist function 

// function calculateAge(birthYear) {
//         return 2020 - birthYear;
// }

// var ageJohn = calculateAge (1975);
// var ageSmith = calculateAge (1980);
// var ageJonas = calculateAge (1999);

// console.log(ageJohn, ageSmith, ageSmith);


//------- IInd function 

// function yearUntilRetirement(year, firstName) {
//     var age = calculateAge(year);
//     var retirement = 65 - age;
//     console.log(firstName + 'retire in' + retirement + 'years.')
// }

// yearUntilRetirement(1990, 'John');
// yearUntilRetirement(1948, 'Mike');
// yearUntilRetirement(1969, 'Jane');




// ===============================================================================================================================


// Ist exercise solution

// let sameName = 'Saurabh';
// console.log(sameName);
// sameName = 'Gaurav';

// console.log(sameName)



// IInd exercise solution

// const favoriteNumber = 30;
// const halfOfFavNum = 30/2;
// // console.log(halfOfFavNum);
// let michaelFavorite = 20;
// let newMichaelValue =  michaelFavorite - halfOfFavNum;
// let michaelNewFavorite = newMichaelValue*26;

// console.log(michaelNewFavorite);




// ========================================  Function Statements and Expression Lecture 20 version 1 💥  ======================================= //

// ---------- Function Declaration

// function whatDoYouDo (job , firstName);


// ---------- Function Expression

// var whatDoYouDo = function (job, firstName) {
//     switch(job) {
//         case 'techer' : 
//         return firstName + ' is a teacher, he is proffesional in their work';
//         case 'doctor' : 
//         return firstName + ' is a doctor, he is proffesional in their work';
//         case 'peon' : 
//         return firstName + ' is a peon, he is proffesional in their work';
//         case 'driver' : 
//         return firstName + ' is a driver, he is proffesional in their work';
//         case 'boxer' : 
//         return firstName + ' is a boxer, he is proffesional in their work';
//         default:
//         return firstName + ' is a coder, he is proffesional in their work';
//     }
// }

// console.log(whatDoYouDo ('doctor' , 'mike'));



//=====================================================  Arrays Lec No 21 v1 💥   ============================================================

// var teamName = [ 'john', 'Mike', 'justin', 'Sam' ];
// var teamYear = new Array( 2018, 2023, 1998, 1983);

// console.log(teamName);
// console.log(teamName[0]);
// console.log(teamName.length);  // to check how many character are their in perticuler array
// teamName [1]= 'Saurabh';
// teamName [6]= 'Ankush';  // call perticuler name by their index value
// teamName[teamName.length] = 'Alish';  // to add name in the last of the array




// --------------------------------------  Defferent type of method of array see couple of here 💥 -------------------------------------------

// teamName.pop();                    // remove the element from the last of array
// teamName.shift();                  // remove the element from the start of array
// teamName.push('Aditya');           // add element in the last of the array
// teamName.unshift('Ankush');        // add element in the begain of the array
// console.log(teamName);


// console.log(teamName.indexOf('justin'));   // to find the index value of exits value


// var teamName = ['john', 'Mike', 'justin', 'Sam', 2018, 'designer'];
// var isDataThere = teamName.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';
// console.log(isDataThere);

// -1 value when value is not there in perticuler array 



// Coding Challenge hotel bill and tip  (Lect 23 v1)

// [
// function tipCalculater(bill) {
//     var percentage;
//     if (bill < 50) {
//         percentage = 0.2;  //20% tip or  20/100
//     }
//     else if (bill >= 50 && bill < 200) {
//         percentage = .15;  // 15% tip or  15/100
//     }
//     }
//     return percentage * bill;
//     else {
//         percentage = 0.1;  // 10% tip or  10/100
// }

// console.log(tipCalculater(100))  // give the bill value according to the amount it false in percentage tip
// ]



// var bills = [124, 48, 268];
// var tips = [tipCalculater(bills[0]),
//             tipCalculater(bills[1]), 
//             tipCalculater(bills[2])];

// var finalValues = [ bills[0] + tips [0],
//                     bills[1] + tips [1],
//                     bills[2] + tips [2],
// ]

// console.log(tips);


// =============================================== Object and properties Lec 24 ==============================

// var john =  {
//     firstName: 'john',
//     job: 'teacher',
//     isMarried: false,
//     lastName: 'smith',
//     family: ['bob', 'alen', 'halker', 'joya'],
//     birthYear:1980
// };

// console.log(john); 
// console.log(john.job);  // to get it perticuler value from the john object (parent.child)
// console.log(john['lastName']);  // another way to get it perticuler value from the john object  (parent['child'])


// var x = 'birthYear';  // store the value of an object in a variable and call that one
// console.log(john[x]);  // here we call that value which we asigned


// john.job = 'Dancer';   // resigned the value to exist's object we need to change teacher into dancer so we easily do by resigned the value
// john['isMarried'] = true;   // same as above
// john.lastName = 'Gurjar';
// console.log(john);


//---------------------------------------- new object syntaxt (another way to write object with his properties)

// var jane = new Object();
// jane.firstName = 'jane',
// jane['lastName'] = 'smith',
// jane.job = 'singer',
// jane.birthYear = 1947;
// console.log(jane)

// End 



// ==============================================  Objects and Methods  ==============================


// var john =  {
//     firstName: 'john',
//     job: 'teacher',
//     isMarried: false,
//     lastName: 'smith',
//     family: ['bob', 'alen', 'halker', 'joya'],
//     birthYear: 1980,
//     calcAge: function() {
//         // return 2018 - this.birthYear;  // one way to call age dynamically
//         this.age = 2018 -this.birthYear;
//     }   

// };

// console.log(john.calcAge())
// john.age = john.calcAge();
// console.log(john);


// ============================================== Coding Challenge =========================================

// var john = {
//     fullName: 'john',
//     mass: 60,
//     height: 1.95,
//     calcBmi: function () {
//         this.Bmi = this.mass / (this.height * this.height);
//         return this.Bmi;
//     }
// }

// var mark = {
//     fullName: 'mark',
//     mass: 90,
//     height: 1.50,
//     calcBmi: function () {
//         this.Bmi = this.mass / (this.height * this.height);
//         return this.Bmi;  // because we have a result of this function so no need to call whole function because in bottom we already use value or output in a return which is form of Bmi.
//     }
// }

// john.calcBmi();
// mark.calcBmi();
// // console.log(john, mark);

// if (john.Bmi > mark.Bmi) {  // which bmi we get it here we are going to compere.
//     console.log(`${john.fullName} have higher Bmi with the value of ${john.Bmi}`);
//     // console.log(john.fullName + 'have higher Bmi with the value of' +  john.calcBmi);

// }

// else if (mark.Bmi > john.Bmi) {  // which bmi we get it here we are going to compere.
//     console.log(`${mark.fullName} have higher Bmi with the value of ${mark.Bmi}`);
//     // console.log(mark.fullName + 'have higher Bmi with the value of' +  mark.calcBmi);
// }

// else {
//     console.log(`Both have same Bmi`);
// }


// ==================================== loops iteration ===================================================

// A loop is defined as a segment of code that executes multiple times. 
// Iteration refers to the process in which the code segment is executed once.

// --------------- For Loop ------------

// for (var i = 0; i < 10; i+=2) {  // i+=2
//     console.log(i);
// }

// i = 0, 0 > 10, true, log i to console, i++
// i = 1, 1 > 10, true, log i to console, i++
// i = 2, 2 > 10, true, log i to console, i++
// its happen on repeat mode
//in last
// i = 9, 9 > 10, true, log i to console, i++
// i = 10, 10 > 10, false, log i to console, i++

// i++ means we are adding 1 after complete one cycle like 1 is coming then its add +1 so we get 2 as our next loops value
// i += 2 means we are adding 2 after complete one cycle like 2 is coming then its add +2 in current value so we get 3 as our next loops value

//  conclusion when we get true from our loops its going further else its exit from current loop 💯 


// var teamName = ['john', 'Mike', 'justin', 'Sam', 2018, 'designer'];
// for (
//       var i = 0; i < teamName.length; i++ 
//     //var i = 0; i < 5; i++   // here its hardcoded that its not going above the index of 5 which is 2018 so that's why we take lengh of the array and pick which one we want to take    
//     ) 
//     {console.log(teamName[i]);}

// // --------------------------------------- While Loop ---------------------------------------------

// var i = 0; 
// while (i < teamName.length) {
//     console.log(teamName[i]);  // same as for loop but little bit easier to use
//     i++;
// }


// // -------------------------------- continue and break statement ---------------------------------

// var teamName = ['john', 'Mike', 'justin', 'Sam', 2018, 'designer'];

// // //---- { Continue }  he take every string from the array

// // for (var i = 0; i < teamName.length; i++) {
// //     if (typeof teamName[i] !== 'string') continue;
// //     console.log(teamName[i]);
// // }

// // // { Break } when he found another oprater instead of string its exit from the array

// // for (var i = 0; i < teamName.length; i++) {
// //     if (typeof teamName[i] !== 'string') break;
// //     console.log(teamName[i]);

// // }

// // ----------------------------------- Looping backwards ---------------------------------------------

// // for (var i = teamName.length - 1; i >= 0; i--) {  
// //     console.log(teamName[i]);
// // }


// ------------------------------------- Coding Challenge ---------------------------------------------


// var john = {
//     fullName: 'John Smith',
//     bills: [124, 48, 268, 180, 42],
//     calcTips: function () {
//         this.tips = [];
//         this.finalValues = [];

//         for (var i = 0; i < this.bills.length; i++) {

//             // determine the percentage based on the tiping rules
//             var percentage
//             var bills = this.bills[i];

//             if (bills < 50) {
//                 percentage = 0.2;
//             }
//             else if (bills >= 50 && bills < 200) {
//                 percentage = 0.15;
//             }

//             else {
//                 percentage = 0.1
//             }
//             // add result according to their coressponding arrays
//             this.tips[i] = bills * percentage;
//             this.finalValues[i] = bills + bills * percentage;
//         }
//     }
// }
// john.calcTips();
// console.log(john);



// ------------------------------- check if the number is even

// function isEven (number) {
//     return number % 2 === 0;
//   }
  
// //check if the number is odd
//   function isOdd (number) {
//     return number % 2 !== 0;
// }
  
//   console.log(isEven(5)); //false
//   console.log(isEven(4)); //true
//   console.log(isOdd(5));  //true
//   console.log(isOdd(4));  //false


//------------------------------------ String Length --------------------------------------------------

// var nameString = "saurab"
// var nameStringLength = nameString.length;
// console.log(nameStringLength);


//------------------------------------ Temprature fahrenheit to celsius -----------------------------

// var fahrenheit = prompt("Enter temperature in Fahrenheit:");
// var celsius = (fahrenheit - 32) * 5/9;
// console.log('The temperature in Celsius is' + celsius);


 //------------------------------------- find the squuire ----------------------------------------

// var squireData = prompt("Put a value which you find the squire");
// var resultValue = squireData * squireData;
// console.log(resultValue);

// ------------------------ 

// var sumData = 2;
// var sumDataResult = sumData + sumData;
// console.log(sumDataResult);
 


