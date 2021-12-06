var slideList = document.getElementsByClassName('p-slide__li')
var slideBtn = document.getElementsByClassName('p-slide__btn');

//配列に変換　IE対応
slideList = Array.prototype.slice.call(slideList);
slideBtn = Array.prototype.slice.call(slideBtn);

var count = 0;
slideBtn.forEach(function(e) {
   e.addEventListener('click', function() {
      change(slideBtn.indexOf(e));
      count = slideBtn.indexOf(e);
   });
});

function change(index) {
   slideBtn.forEach(function(e) { e.setAttribute('aria-expanded', 'false'); })
   slideBtn[index].setAttribute('aria-expanded', 'true');

   slideList.forEach(function(e) { e.setAttribute('aria-hidden', 'true'); })
   slideList[index].setAttribute('aria-hidden', 'false');
}

function timer() {
   change(count);

   if(count >= 2){
      count = 0;
   } else {
      count++;
   }

   setTimeout(timer, 3000, count);
}

window.addEventListener('load', function() {
   timer();
});