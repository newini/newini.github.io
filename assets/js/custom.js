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
  // Navbar
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").classList.add('navbar-scroll');
  } else {
    document.getElementById("navbar").classList.remove('navbar-scroll');
  }

  // Skills progress bar
  const bottom = window.pageYOffset + window.innerHeight;
  if (bottom > document.getElementById('skills').offsetTop) {
    const progress_arr = Array.from( document.getElementsByClassName('progress-bar') );
    progress_arr.forEach( (progress) => {
      progress.classList.add('skills-progress-animate');
    });
  }
}

// Bootstrap popper
// But hover (mouse enter) to show and leave to hide
window.addEventListener('DOMContentLoaded', () => {
  const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    const popover = new bootstrap.Popover(popoverTriggerEl);
    popoverTriggerEl.addEventListener('mouseenter', () => {
      popover.show();
    });
    popoverTriggerEl.addEventListener('mouseleave', () => {
      popover.hide();
    });
    return popover;
  })
});
