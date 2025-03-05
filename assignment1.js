// Prompt the user to enter a score and store it in the variable 'grade'
let grade = prompt("Enter your score:");

grade = Number(grade); //Converts the input into numbers since the entered values in prompt will turn into a string data type even if they're numbers.
//This can be proved by removing this conversion and typing 97 while the operator in the condition used is strict equality (===).

if (grade == 97 ){ //Checks if the grade is equals to 97, if true, then log "Your equivalent Grade is “1.00” Excellent".
    console.log("Your equivalent Grade is “1.00” Excellent")
}else if (grade >= 94 && grade <=96) {//Checks if the grade is greater than or equal to 94 and less than or equal to 96, if true, then log "Your equivalent Grade is “1.25” Excellent".
    console.log ("Your equivalent Grade is “1.25” Excellent")
}else if (grade >= 91 && grade <=93){//Checks if the grade is greater than or equal to 91 and less than or equal to 93, if true, then log "Your equivalent Grade is “1.50” Above Average".
    console.log("Your equivalent Grade is “1.50” Above Average")
}else if (grade >= 88 && grade <= 90){//Checks if the grade is greater than or equal to 88 and less than or equal to 90, if true, then log "Your equivalent Grade is “1.75” Above Average".
    console.log("Your equivalent Grade is “1.75” Above Average")
}else if (grade >= 85 && grade <=87){//Checks if the grade is greater than or equal to 85 and less than or equal to 87, if true, then log "Your equivalent Grade is “2.00” Average".
    console.log("Your equivalent Grade is “2.00” Average")
}else if (grade >= 82 && grade <=84){//Checks if the grade is greater than or equal to 82 and less than or equal to 84, if true, then log "Your equivalent Grade is “2.25” Average".
    console.log("Your equivalent Grade is “2.25” Average")
}else if (grade >= 79 && grade <=81){//Checks if the grade is greater than or equal to 79 and less than or equal to 81, if true, then log "Your equivalent Grade is “2.50” Below Average".
    console.log("Your equivalent Grade is “2.50” Below Average")
}else if (grade >= 76 && grade <=78){//Checks if the grade is greater than or equal to 76 and less than or equal to 78, if true, then log "Your equivalent Grade is “2.75” Below Average".
    console.log("Your equivalent Grade is “2.75” Below Average")
}else if(grade == 75){//Checks if the grade is equals to 75 then log "Your equivalent Grade is “3.00” Below Average".
    console.log("Your equivalent Grade is “3.00” Below Average")
}else if (grade >= 72 && grade <= 74){//Checks if the grade is greater than or equal to 72 and less than or equal to 74, if true, then log "Your equivalent Grade is “4.00” Poor".
    console.log("Your equivalent Grade is “4.00” Poor")
}else {//If grade is lower than 72, if true, then log "Your equivalent Grade is “5.00” Poor".
    console.log("Your equivalent Grade is “5.00” Poor")
}


if (grade >= 90){ //Checks if grade is greater than or equal to 90, if true, then logs "HIGH PASS, Candidate for Cum Laude".
    console.log("HIGH PASS, Candidate for Cum Laude")
}else if (grade >= 80 && grade <= 89){ //Checks if grade is greater than or equal to 80 and less than or equal 89, if true, then logs "AVERAGE PASS".
    console.log("AVERAGE PASS")
}else if (grade >= 75 && grade <=79){//Checks if grade is greater than or equal to 75 and less than or equal 79, if true, then logs "LOW PASS".
    console.log("LOW PASS")
}else {//Checks if grade is less than to 75, if true, then logs "FAILED, Needs Improvement".
    console.log("FAILED, Needs Improvement")
}