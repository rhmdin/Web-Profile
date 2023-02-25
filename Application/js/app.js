
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("nav-container").style.top = "0";
  } else {
    document.getElementById("nav-container").style.top = "-100%";
  }
}