const sumOddIntegers = (N) => {
    let sum = 0;
    let count = 0;
    let num = 1;
  
    while (count < N) {
      sum += num;
      num += 2; // Move to the next odd number
      count++;
    }
  
    console.log(`Sum of the first ${N} odd integers:`, sum);
  };
  
  sumOddIntegers(4); // Output: Sum of the first 4 odd integers: 16

  const drawConsolePyramid = (height) => {
    for (let i = 1; i <= height; i++) {
      let spaces = ' '.repeat(height - i); // Add spaces for centering
      let stars = '*'.repeat(2 * i - 1);   // Generate increasing width
      console.log(spaces + stars);
    }
  };
  
 drawConsolePyramid(8);

  const multiplyArray = (arr) => {
    return arr.reduce((product, num) => product * num, 1);
  };
  
 
  console.log(multiplyArray([2, 3, 4])); // Output: 24
  console.log(multiplyArray([1, 5, 0, 10])); // Output: 0

  const randomAverage = (n) => {
    let sum = 0;
    for (let i = 0; i < n; i++) {
      sum += Math.random(); // Generates a random number between 0 and 1
    }
    return sum / n; // Calculate average
  };
  

  console.log(randomAverage(5)); // Example output: 0.467 (varies with execution)
  console.log(randomAverage(10)); // Example output: 0.523 (varies with execution)


  // Statistically, calling randomAverage(n) will produce results that become closer to 0.5 as the value of n increases. 
  // Write a main program that displays the result of calling randomAverage on 1, 10, 100, 1000, 10000, 100000, and 1000000. 
  // See Math.random() for details on how to generate a random number
  const randomAverage2 = (n) => {
    let sum = 0;
    for (let i = 0; i < n; i++) {
      sum += Math.random(); // Generates a random number between 0 and 1
    }
    return sum / n; // Calculate average
  };
  
  const main = () => {
    const testCases = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000];
  
    testCases.forEach(n => {
      console.log(`randomAverage(${n}) = ${randomAverage(n).toFixed(6)}`);
    });
  };
  
  // Run the main program
  main();

    // Write a function that takes a string as input and returns the longest word in the string.
  const longestWord = (str) => str.split(' ').reduce((longest, word) => word.length > longest.length ? word : longest, "");
  console.log(longestWord("JavaScript is an awesome language")); // "JavaScript"

  const areAnagrams = (str1, str2) => {
    return str1.split('').sort().join('') === str2.split('').sort().join('');
  };
  console.log(areAnagrams("listen", "silent")); // true