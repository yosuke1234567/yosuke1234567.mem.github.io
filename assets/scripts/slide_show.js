let slideList = document.getElementsByClassName('p-slide__li');
let slideBtn = document.getElementsByClassName('p-slide__btn');

// 配列に変換 IE対応
slideList = Array.prototype.slice.call(slideList);
slideBtn = Array.prototype.slice.call(slideBtn);

// 何番目かを表すカウント
let count = 0;

slideBtn.forEach(function(e, index) {
   e.addEventListener('click', function() {
      change(index);
      count = index;
   });
});

function change(index) {
   // すべてのボタンを閉状態にする
   slideBtn.forEach(function(e) { e.setAttribute('aria-expanded', 'false'); })
   // 選択されたボタンを開状態にする
   slideBtn[index].setAttribute('aria-expanded', 'true');

   // すべてのスライドを非表示にする
   slideList.forEach(function(e) { e.setAttribute('aria-hidden', 'true'); })
   // 選択されたスライドを表示する
   slideList[index].setAttribute('aria-hidden', 'false');
}

function slideTimer() {
   change(count);

   if(count >= 2){
      count = 0;
   } else {
      count++;
   }

   setTimeout(slideTimer, 3000, count);
}

window.addEventListener('load', function() {
   slideTimer();
});