// Prompt user for max limit and convert input to an integer
const limit = parseInt(prompt("MaxLimit of Loop: "), 10);//To accept numbers, parseInt is used since the data type that is accepted by prompt is a string data type.
//So the parseInt convert it into a Int data type with a base 10 counting


for (let i = 0; i <= limit; i++) {//This is outer loop where the iteration starts at 0 and ends depending on the input of the user in prompt function.
    for (let j = 0; j <= limit; j++) {//This is the inner loop where the iteration starts at 0 and ends depending on the input of the user in prompt function.
        // Print the output using concatenation then adding a statement "Added value is" then the sum of the result of the loop.
        console.log("[", i ,"] [", j, "] Added value is " + (i + j));
    }
}