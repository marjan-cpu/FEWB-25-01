  // Declare variables
  let numberOfStars = 0;
  let outputStars = '';

  // inputs
  numberOfStars = prompt("Enter the number of stars?");

 // loop
  for (let i=0; i < numberOfStars; i++ ) {
    outputStars += "*";
 }
 
 // output 
 alert("Outputting " + numberOfStars + " stars: " + outputStars)
