let closemenu = document.getElementById("closemenu");
let openmenu = document.getElementById("respmenu");
openmenu.addEventListener("click", open);
function open() {
    document.getElementById("menu").style.visibility = "unset";
    document.getElementById("menu").style.transition="0.5s";
  }
  closemenu.addEventListener("click", close);
  function close() {
    document.getElementById("menu").style.visibility = "hidden";
  }
// Create a media condition that targets viewports at least 768px wide

// Check if the media query is true
