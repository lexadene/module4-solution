// STEP 1: Create an array of names
var names = ["adlene", "bou", "fatima", "zohra", "raouf", "Fres", "Larry", "Paula", "Laura", "Jim"];

// STEP 2: Loop over the names array
for (var i = 0; i < names.length; i++) {
  var name = names[i];
  // STEP 3: Check the first letter of the name
  var firstLetter = name.charAt(0).toLowerCase();

  // STEP 4: Print "Good Bye" if first letter is 'j', else "Hello"
  if (firstLetter === 'j') {
    // Use byeSpeaker.speak
    byeSpeaker.speak(name);
  } else {
    // Use helloSpeaker.speak
    helloSpeaker.speak(name);
  }
}