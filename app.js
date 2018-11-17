let delayTimer;

function myFunction() {
    delayTimer = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("front").style.opacity = "1";
}
