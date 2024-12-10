//Repeats code while a condition is true.

let i = 0;
while (i < 5) {
  console.log(i); // Outputs 0, 1, 2, 3, 4
  i++;
}
/** do...while Loop
Similar to while, but the code block executes at least once, 
even if the condition is false. */

do {
  console.log(i); // Outputs 0, 1, 2, 3, 4
  i++;
} while (i < 5);

/**switch Statement
Executes different blocks of code based on the value of an expression. */

const fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("This is an apple.");
    break;
  case "banana":
    console.log("This is a banana.");
    break;
  default:
    console.log("Unknown fruit.");
}


/** continue
Skips the rest of the loop for the current iteration and proceeds to the next iteration.*/
for (let i = 0; i < 5; i++) {
    if (i === 2) continue; // Skip iteration when i is 2
    console.log(i); // Outputs 0, 1, 3, 4
  }
  


/**break
Exits the loop or switch statement entirely, stopping further iterations or case evaluations. */

const color = "red";

switch (color) {
  case "red":
    console.log("Stop!");
    break; // Exits the switch
  case "green":
    console.log("Go!");
    break;
  default:
    console.log("Caution!");
}
