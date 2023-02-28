let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 140 || document.documentElement.scrollTop > 140) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//do this with nodemailer afterwards
var send = document.getElementById("btncontact");
var ctcForm = document.getElementById("ctcForm");
ctcForm.addEventListener("submit", (e) => {
  e.preventDefault();
  var email = document.getElementById("email").value;
  var msg = "From: " + email + "\n" + document.getElementById("message").value;
  var url = "mailto:virajdoshi11@gmail.com?body=" + encodeURIComponent(msg);
  window.location.href = url;
})
// send.addEventListener("click", (e) => {
//   // e.preventDefault();
//   var email = document.getElementById("email").value;
//   var msg = "From: " + email + "\n" + document.getElementById("message").value;
//   var url = "mailto:virajdoshi11@gmail.com?body=" + encodeURIComponent(msg);
//   window.location.href = url;
// })

var download1 = document.getElementById("btncv");
var download2 = document.getElementById("btncv2");
var hireMe = document.getElementById("btn1");

download1.addEventListener("click", () => {
  window.open("./Viraj-Doshi-Resume.docx (1).pdf");
})
download2.addEventListener("click", () => {
  window.open("./Viraj-Doshi-Resume.docx (1).pdf");
})
hireMe.addEventListener("click", () => {
  window.open("#contact", "_self");
})

var mode = document.getElementById("flexSwitchCheckDefault");
mode.addEventListener("click", () => {
  console.log(mode.checked);
  if(mode.checked) {    //do black
    document.documentElement.style.setProperty("--secondary", "#000000");
  } else {
    document.documentElement.style.setProperty("--secondary", "#ffffff");
  }
})

// colorPicker.addEventListener("input", () => {
//       var hsl = HexToHSL(colorPicker.value);
//       if(hsl.l < 10) {
//         document.documentElement.style.setProperty("--primary", sphere.style.color);
//         //here the sphere value is used as a previous value so that id the lightness 
//         //id less than 10% then the previous value of the inout will be chosen
//       } else {
//         document.documentElement.style.setProperty("--primary", colorPicker.value);
//         sphere.style.color = colorPicker.value;
//       }
//     })