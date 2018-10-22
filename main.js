// const TypeWriter = function(
//   txtElement /*the span in the html*/,
//   words /* comes from the data words attribute*/,
//   wait = 3000 /*the wait time*/
// ) {
//   this.txtElement = txtElement; //we can assing properties with the "this." keyword
//   this.words = words;
//   this.txt = ""; //what txt represents is what is current in the changing area (the design/developer/creator thing)
//   this.wordIndex = 0; //for the first array element by default
//   this.wait = parseInt(wait, 10); //to ensure it is an integer
//   this.type();
//   this.isDeleting = false; //a boolean to represent the state of if the typewriter is currently deleting
// };

// // Type Method
// TypeWriter.prototype.type = function() {
//   //the way that we add a method to our typewriter is by using prototype and the name of the method that we're calling type
//   //current index of word
//   const current = this.wordIndex % this.words.length; // % the modulus operator
//   // Get the full text of the current word
//   const fullTxt = this.words[current];

//   // Check if in the Deleting state
//   if (this.isDeleting) {
//     // Remove a character
//     this.txt = fullTxt.substring(0, this.txt.length - 1);
//   } else {
//     // Add a character
//     this.txt = fullTxt.substring(0, this.txt.length + 1);
//   }

//   // Insert txt into element
//   this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`; // We could concatenate but we're goign to use ES6 so we use backticks so we can use a template literal.

//   // Initial Type Speed
//   let typeSpeed = 300;

//   if (this.isDeleting) {
//     typeSpeed /= 2; //divide by 2
//   }

//   // Check to see if the word is complete
//   if (!this.isDeleting && this.txt === fullTxt) {
//     // Make pause at end of typing out word
//     typeSpeed = this.wait;
//     // Set delete to true
//     this.isDeleting = true;
//   } else if (this.isDeleting && this.txt === "") {
//     //This point is when a word is fully deleted
//     this.isDeleting = false;
//     // Move to next word
//     this.wordIndex++;
//     // Pause before typing again
//     typeSpeed = 500;
//   }

//   setTimeout(() => this.type(), typeSpeed);
// };

// ES6 Class
class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    // A constructor is just a method that runs when the object is instantiated from the class (basically when you do "new TypeWriter(txtElement, words, wait)" like from above. Currently line 67)
    this.txtElement = txtElement; //we can assing properties with the "this." keyword
    this.words = words;
    this.txt = ""; //what txt represents is what is current in the changing area (the design/developer/creator thing)
    this.wordIndex = 0; //for the first array element by default
    this.wait = parseInt(wait, 10); //to ensure it is an integer
    this.type();
    this.isDeleting = false; //a boolean to represent the state of if the typewriter is currently deleting
  }

  //instead of creating a prototype method we'll jsut create a method within the class
  type() {
    //the way that we add a method to our typewriter is by using prototype and the name of the method that we're calling type
    //current index of word
    const current = this.wordIndex % this.words.length; // % the modulus operator
    // Get the full text of the current word
    const fullTxt = this.words[current];

    // Check if in the Deleting state
    if (this.isDeleting) {
      // Remove a character
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add a character
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`; // We could concatenate but we're goign to use ES6 so we use backticks so we can use a template literal.

    // Initial Type Speed
    let typeSpeed = 300;

    if (this.isDeleting) {
      typeSpeed /= 2; //divide by 2
    }

    // Check to see if the word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end of typing out word
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      //This point is when a word is fully deleted
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before typing again
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Init On DOM Load
document.addEventListener("DOMContentLoaded", init);

// the function will Init our App
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words")); //JSON.parse to parse the "array" in the html file so its not just read as a string
  const wait = txtElement.getAttribute("data-wait");
  // Initialize the TypeWriter
  new TypeWriter(txtElement, words, wait);
}
