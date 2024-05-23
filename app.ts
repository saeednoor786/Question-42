
// Q:42 Great Magicians: Start with a copy of your program from Exercise 39. 
// Write a function called make_great() that modifies the array of magicians by adding the phrase 
// the Great to each magician’s name. Call show_magicians() to see that the list has actually 
// been modified.

// Array of magician's names
let magicians: string[] = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller", "Dynamo"];

// Function to print the names of magicians
function show_magicians(magicians: string[]): void {
  magicians.forEach((magician) => {
    console.log(magician);
  });
}

// Function to add "the Great" to each magician's name
function make_great(magicians: string[]): string[] {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = "the Great " + magicians[i];
  }
  return magicians;
}

// Modify the magicians array
make_great(magicians);

// Show the modified list of magicians
show_magicians(magicians);
