let drawer = document.getElementsByClassName('p-drawer');
let navList = document.getElementsByClassName('p-nav__li');

// 配列に変換 IE対応
drawer = Array.prototype.slice.call(drawer);
navList = Array.prototype.slice.call(navList);

let drawerTimer = [];
navList.forEach(function(e, index) {
   e.addEventListener('mouseover', function() {
      drawer[index].setAttribute('aria-hidden', 'false');
      // マウスオーバーしている間はタイマーを停止
      clearTimeout(drawerTimer[index]);
   });
   e.addEventListener('mouseleave', function() {
      // マウスが離れてから0.2秒後に非表示
      drawerTimer[index] = setTimeout(function () {
         drawer[index].setAttribute('aria-hidden', 'true');
      }, 200);
   });
});