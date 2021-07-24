/* Get parameter from url */
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let locale = urlParams.get('locale')
if (!locale || (locale != 'en' && locale != 'ja' && locale != 'ko') ) {
  locale = 'en';
}

/* Language */
const language = {
  en: {
    home_message: "Welcome to Eunchong Kim's Home Page!"
  },
  ja: {
    home_message: "金恩寵のホームページへようこそ"
  },
  ko: {
    home_message: "김은총의 홈페이지"
  }
}
document.getElementById('home_message').innerHTML = language[locale]['home_message'];


/* Home */
/* Change navbar bkg color on Scroll */
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.background = "#201e27";
  } else {
    document.getElementById("navbar").style.background = "none";
  }
}
