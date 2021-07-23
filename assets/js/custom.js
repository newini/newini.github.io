/* Change navbar bkg color on Scroll */
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.background = "#201e27";
  } else {
    document.getElementById("navbar").style.background = "none";
  }
}
