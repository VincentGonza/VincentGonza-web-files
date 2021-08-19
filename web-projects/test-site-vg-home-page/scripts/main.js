let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Discus-fish.jfif') {
      myImage.setAttribute ('src','images/Discus-fish-care.jfif');
    } else {
      myImage.setAttribute ('src','images/Discus-fish.jfif');
    }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Discus Fish 101 ' + myName;
    }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Discus Fish 101 ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }