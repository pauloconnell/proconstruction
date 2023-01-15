/*
This is your site JavaScript code - you can add interactivity and carry out processing
- Initially the JS writes a message to the console, and moves a button you can add from the README
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the "Next steps" in the README
*/
const btn = document.querySelector("button"); // Get the button from the page
// Detect clicks on the button
if (btn) {
  btn.onclick = function () {
    // The JS works in conjunction with the 'dipped' code in style.css
    btn.classList.toggle("dipped");
  };
}

var link = document.getElementById("getQuote");
link.onclick = function () {
  this.href =
    "mailto:mrconstruction101@outlook.com?subject=M.R.%20Pro%20Construction%20quote%20request&body=";
  this.href += "******************************************************%0A%0A";
  this.href +=
    "Please%20just%20hit%20send%20to%20complete%20this%20request.%20We%20will%20contact%20you%20soon.%0A%0A";
  this.href += "******************************************************%0A%0A";
  this.href += "%0A%0A";
  this.href += "%0A%0A";
  this.href += "%0A%0A";
  this.href += "***************-Message%20BODY-***********************%0A%0A";
  this.href += "Request%20from:%20" + document.getElementById("fname").value;
  this.href += document.getElementById("lname").value;
  this.href += "%0A%0A" + "phone#:%20" + document.getElementById("tel").value;
  this.href += "%0A%0A" + "city:%20" + document.getElementById("city").value;
  this.href +=
    "%0A%0A" + "street:%20" + document.getElementById("street").value;
  this.href +=
    "%0A%0A" + "type:%20" + document.getElementById("renoType").value;
  this.href +=
    "%0A%0A" +
    "description:%20" +
    document.getElementById("jobRequest").value +
    "%0A%0A";
  this.href += "******************************************************%0A%0A";
};

let classes = ["growBig", "col-sm-4"];

document
  .querySelector(".gallery")
  .addEventListener("click", (e) => galleryImage(e));

let galleryImage = (e) => {
  console.log(e.target);
  e.target.classList.toggle(...classes);
};
