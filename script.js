// 1. Eligibility Check
// Write a condition to check if a student is eligible for a scholarship. The criteria are:
// - The student’s grade is A or B.
// - The student’s attendance is above 75%.
// Use a ternary operator to assign "Eligible" or "Not Eligible" to a variable.
var Grade = "C";
var percentage=75;
var Scholorship= (Grade=="A"|| Grade=="B" && percentage>=75)
    ? "Student is eligible for scholoship"
    : "Student is not eligible for scholoship"
console.log(Scholorship);
console.clear();

// 2. Age Group Classification
// Classify a person based on their age:
// - If the age is less than 13, they are a “Child”.
// - If the age is between 13 and 19 (inclusive), they are a “Teenager”.
// - Otherwise, they are an “Adult”.
// Use nested ternary operators to determine the classification.

var age=24
var person=(age<13)? "They are child":(age<=19 && age>=13)
    ?"They are teenagers"
    : "They are adult"
    console.log(person);
    console.clear();


// 3. Login Status
// Check the login status of a user. A user is considered logged in if:
// - isLoggedIn is true.
// - Their session is active (sessionActive is true).
 // Use a ternary operator to log "Welcome Back" if the user is logged in and "Please Log In" otherwise.

 var isLoggedIn=true;
 var sessionActive=false;
 var message=(isLoggedIn && sessionActive)?"welcome Back":"Please log In"
 console.log(message);

 var isLoggedIn=true;
 var sessionActive=true;
 var message=(isLoggedIn && sessionActive)?"welcome Back":"Please log In"
 console.log(message);
 console.clear();
 

//  4. Grade Evaluation
// Assign a letter grade based on a student’s score:
// - Scores 90 and above: "A".
// - Scores between 80 and 89: "B".
// - Scores between 70 and 79: "C".
// - Scores below 70: "Fail".
// Use nested ternary operators to determine the grade.

var score=89
var grade=(score>=90)?"student Grade is :A"
:(score<=89 && score>=80)?"Student Grade is:B"
:(score<=79 && score>=70)?"Student Grade is:C"
:"Fail"
console.log(grade);
console.clear();


// 5. Product Discount Validation
// Determine the discount for a product based on the following criteria:
// - If the product price is greater than $100, the discount is 20%.
// - Otherwise, the discount is 10%.
// Use a ternary operator to set the discount percentage.


var amount=90;
var discount=(amount>100)?"The discount is 20%":"The discount is 10%"
console.log(discount);