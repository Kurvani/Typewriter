const TypeWriter = function(
  txtElement /*the span in the html*/,
  words /* comes from the data words attribute*/,
  wait = 3000 /*the wait time*/
) {
  this.txtElement = txtElement; //we can assing properties with the "this." keyword
  this.words = words;
  this.txt = ""; //what txt represents is what is current in the changing area (the design/developer/creator thing)
  this.wordIndex = 0; //for the first array element by default
  this.wait = parseInt(wait, 10); //to ensure it is an integer
  this.type();
  this.isDeleting = false; //a boolean to represent the state of if the typewriter is currently deleting
};

// Type Method
TypeWriter.prototype.type = function() {
  //the way that we add a method to our typewriter is by using prototype and the name of the method that we're calling type
  //current index of word
  const current = this.wordIndex % this.words.length; // % the modulus operator
  // Get the full text of the current word
  const fullTxt = this.words[current];

  console.log(fullTxt);

  setTimeout(() => this.type(), 500);
};

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
