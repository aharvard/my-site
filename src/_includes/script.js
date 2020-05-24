const footerDateSpan = document.getElementById("footer-date");
const year = new Date();
footerDateSpan.innerText = year.getFullYear();


// function addElement() {
//   const body = document.querySelector("body");
//   const themeButton = document.createElement("button");
//   let themeButtonText = document.createTextNode("Hi there and greetings!");
  
//   themeButton.appendChild(themeButtonText);  
//   body.insertAdjacentElement("beforeend", newDiv)
// }
// addElement();