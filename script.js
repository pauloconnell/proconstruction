/*
This is your site JavaScript code - you can add interactivity and carry out processing
- Initially the JS writes a message to the console, and moves a button you can add from the README
*/

var link = document.getElementById("getQuote");
link.onclick = function () {
  console.log(" populating email");
  var email =
    "mailto:mrconstruction101@outlook.com?subject=M.R.%20Pro%20Construction%20quote%20request&body=";
  email += "******************************************************%0A%0A";
  email +=
    "Please%20just%20hit%20send%20to%20complete%20this%20request.%20We%20will%20contact%20you%20soon.%0A%0A";
  email += "******************************************************%0A%0A";
  email += "%0A%0A";
  email += "%0A%0A";
  email += "%0A%0A";
  email += "***************-Message%20BODY-***********************%0A%0A";
  email += "Request%20from:%20" + document.getElementById("fname").value;
  email += document.getElementById("lname").value;
  email += "%0A%0A" + "phone#:%20" + document.getElementById("tel").value;
  email += "%0A%0A" + "city:%20" + document.getElementById("city").value;
  email += "%0A%0A" + "street:%20" + document.getElementById("street").value;
  email += "%0A%0A" + "type:%20" + document.getElementById("renoType").value;
  email +=
    "%0A%0A" +
    "description:%20" +
    document.getElementById("jobRequest").value +
    "%0A%0A";
  email += "******************************************************%0A%0A";

  window.location.href = email; // Set the location to the email link
};

// let classes = ["growBig", "col-sm-4"];

// document
//   .querySelector(".carousel")
//   .addEventListener("click", (e) => galleryImage(e));

// let galleryImage = (e) => {
//   console.log(e.target);
//   e.target.classList.toggle(...classes);
// };
