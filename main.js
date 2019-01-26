var someDogs = document.getElementById('some-dogs'); // original placeholder text
var newName = document.getElementById('new-name'); // text from user input
var button = document.getElementById('change-name'); // submit button
var menu = document.getElementById('menu'); // menu
var links = document.getElementById('links');
var cover = document.getElementById('cover');

// replace text on page
button.addEventListener("click", function(e) {
  e.preventDefault(); // prevents refresh
  if(newName.value) {
    someDogs.innerText = newName.value;
    newName.value = "";
  }
});

// dropdown menu
menu.addEventListener("click", function(e) {
  e.preventDefault();
  if(links.style.display === "block") {
    links.style.display = "none";
    cover.style.marginTop = "60px";
  } else {
    links.style.display = "block";
    cover.style.marginTop = "180px";
  }
});
