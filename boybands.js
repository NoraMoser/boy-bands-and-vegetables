var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
var loopCount = 5;

// Keep track of which band we're on in the loop
var currentBand = "";

// Keep track of which veggie we're on in the loop
var currentVeggie = "";

// Get a reference to the appropriate DOM element for bands
var bandElement = document.querySelector('#boy-bands');
// console.log(bandElement);
// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.querySelector('#vegetables');
console.log(veggieElement);
// Start looping
for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {

  // console.log(bands[loopTracker]);
  // console.log(vegetables[loopTracker]);
  // Add the band names into the correct <div>
  currentBand += `<div>${bands[loopTracker]}</div>`;

  
  // Add the veggie names into the correct <div>
  currentVeggie += `<div>${vegetables[loopTracker]}</div>`;

}

bandElement.innerHTML = currentBand;
veggieElement.innerHTML = currentVeggie;