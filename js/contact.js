

function typeWriter(text, index = 0) {
  var speed = 50; // typing speed in milliseconds
  var element = document.getElementById("TitreContact");
  element.textContent = " "
  if (index < text.length) {
    element.textContent += text.charAt(index);
    index++;
    setTimeout(function() {
      typeWriter(text, index);
    }, speed); 
  } else {
    setTimeout(function() {
      deleteText(text, index);
    }, speed * 10); // pause before deleting
  }
}

function deleteText(text, index) {
  var speed = 25; // deletion speed in milliseconds
  var element = document.getElementById("TitreContact");

  if (index >= 0) {
    element.textContent = text.substring(0, index);
    index--;
    setTimeout(function() {
      deleteText(text, index);
    }, speed);
  } else {
    setTimeout(function() {
      typeWriter(text, 0); // restart typing
    }, speed * 10); // pause before typing
  }
}

// Call the function with your desired text
typeWriter("Contact");