const hamburgerBtn = document.getElementById('hamburger-btn');
const hamburgerWrap = document.getElementById('hamburger-wrap');
let hamburgerBtnExpanded = hamburgerBtn.getAttribute('aria-expanded');

hamburgerBtn.addEventListener('click', function() {
   if(hamburgerBtnExpanded === 'false') {
      hamburgerBtn.setAttribute('aria-expanded', 'true');
      hamburgerWrap.setAttribute('aria-hidden', 'false');
      hamburgerBtnExpanded = hamburgerBtn.getAttribute('aria-expanded');
   } else if(hamburgerBtnExpanded === 'true') {
      hamburgerBtn.setAttribute('aria-expanded', 'false');
      hamburgerWrap.setAttribute('aria-hidden', 'true');
      hamburgerBtnExpanded = hamburgerBtn.getAttribute('aria-expanded');
   }
});